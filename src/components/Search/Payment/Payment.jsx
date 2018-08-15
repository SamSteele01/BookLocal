import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Lokka } from 'lokka'
import { Transport } from 'lokka-transport-http'
// import getWeb3 from 'utils/getWeb3'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import moment from 'moment'
import { PulseLoader } from 'react-spinners'

import TextInput from 'components/TextInput'
import ResDetails from '../ResDetails';
import './Payment.css'

const client = new Lokka({
  transport: new Transport('http://localhost:8080/graphql')
});

class Payment extends Component {
  static propTypes = {
    web3: PropTypes.object.isRequired,
    hotelContract: PropTypes.object,
    roomTypeIndex: PropTypes.number,
    address: PropTypes.string,
    showPaymentForm: PropTypes.func,
    reservationData: PropTypes.object,
    bookingDates: PropTypes.array,
  }
  constructor(props) {
    super(props)
    this.state = {
      paymentAmountETH: null,
      walletAddress: window.web3.eth.accounts[0],
      additionalValue: 0,
      total: this.props.price,
      submitted: false,
      paymentTypeToggle: false,
      transactionId: null,
      showHideEthForm: 'isVisible',
      showHideCcForm: 'isHidden',
      response: null,
      blockNum: null,
      status: null,
    }
  }

  handleTextChange = (event) => {
    if(this.state[event.target.id] !== undefined) {
      this.setState({[event.target.id]: event.target.value});
    }
  }
  hidePaymentForm = () => {
    this.props.showPaymentForm(false);
  }
  dateConverter = (mmddyyyy) => {
    return Math.floor(moment(mmddyyyy).unix() / 86400);
  }

  handleAddValue = (event) => {
    event.preventDefault();
    console.log('typeof', typeof(this.state.additionalValue))
    let total = this.props.price + parseFloat(this.state.additionalValue)
    console.log('TOTAL', total)
    this.setState({ total: total })
    // console.log('TOTAL', this.state.total)
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let web3 = this.props.web3;
    this.props.hotelContract.reserve(
      this.props.roomTypeIndex,
      this.dateConverter(this.props.checkInDate),
      this.dateConverter(this.props.checkOutDate),
      {
        from: web3.eth.accounts[0],
        value: web3.toWei(this.state.total, 'ether'),
        gas: 3000000
      },
      (err,res) => {
        if (err) {
          console.log('availability: "false" '+err);
          this.setState({ availability: `Oops! Something went wrong ${err}` })
        } else {
          this.setState({
            response: res, // switch to response page
            account: web3.eth.accounts[0],
          })
          this.setTxnListener(res)
        }
      }
    );
  }

  setTxnListener = (txn) => {
    let listener = setInterval( () => {
      this.transaction(txn)
      if (this.state.blockNum !== null) {
        this.getTxnReceipt(txn)
        clearInterval(listener)
      }
    }, 2000)
  }

  transaction = (txn) => {
    this.props.web3.eth.getTransaction(txn, (error, result) => {
      if(!error) {
        this.setState({blockNum: result.blockNumber})
      }else{
        console.error(error);
        console.log(result);
      }
    })
  }

  getTxnReceipt = (txn) => {
    this.props.web3.eth.getTransactionReceipt(txn, (error, result) => {
      if(!error) {
        this.setState({status: result.status})
      }else{
        console.error(error);
        console.log(result);
      }
    })
  }

  // not used yet. Should validate, then submit at the same time as payment
  // to contract

  // async submitTravelerInfo(input) {
  //   // hotelAddressArray => hotelDataArray
  //   let traveler = ''
  //   let address = ''
  //   let string = `($input: TravelerInput!){
  //     addNewTraveler(input: $input){
  //       id
  //       ethAddress
  //       name
  //       phoneNumber
  //       preferences
  //     }
  //   }`
  //   let variable = { input: input }
  //   await client.mutate(string, variable)
  //   .then(data => {
  //     traveler = data
  //     address = data.addNewTraveler.ethAddress
  //   }).catch(error => console.log(error))
  //   return { traveler, address }
  // }

  render() {
    // display payment form
    // display price in ETH future TODO: display in multiple currencies
    // Create form with wallet address or handle via Metamask?
    // Submit payment and send out for confirmation
    // TODO: Decide if the reservation Details aspects are necessary in this window.
        // stringify dates
        const startDate = moment(this.props.checkInDate).format("MMM Do, YYYY");
        console.log(startDate);
        const endDate = moment(this.props.checkOutDate).format("MMM Do, YYYY");
        console.log(endDate);
        console.log('typeof total', typeof(this.state.total))
    return(
      <div styleName="form-container">
        <div styleName="form-close" onClick={this.hidePaymentForm}>
          <FontAwesomeIcon icon={faTimes} size="2x" />
        </div>
        <div styleName="form-content">
          <ResDetails
            price={this.props.price}
            reservationData={this.props.reservationData}
            startDate={startDate}
            endDate={endDate}
          />
          <div styleName="form-header">
            <div styleName="form-title"><h1>Payment for reservation</h1></div>
          </div>
          { this.state.response ?
            <fieldset>
              { (this.state.blockNum && this.state.status!==null) ?
                <div>
                  {this.state.status==="0x1" ?
                    <div>
                      <h1>Room Reserved!</h1>
                      <div>
                        Thank you for booking your room with BookLocal!
                      </div>
                    </div>
                  :
                    <div className="reserve-warning">
                      There was a problem with the reservation getting mined.
                    </div>
                  }
                </div>
              :
                // spinner
                <div>
                  <PulseLoader color='#1b75bb' loading={true} />
                  <div>
                    Please wait while the transaction gets mined.
                    This could take a minute or two.
                  </div>
                </div>
              }
              <p>The address that you used to book is: {this.state.account}</p>
              <div className="reserve-warning">
                See the transaction on
                <a
                  href={`https://rinkeby.etherscan.io/tx/${this.state.response}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Etherscan.io.
                </a>
              </div>
            </fieldset>
         :
            <fieldset>
              <form styleName="paymentForm" className={this.state.showHideEthForm} >
                <TextInput
                  htmlId="walletAddress"
                  name="walletAddress"
                  label="Wallet Address"
                  type="text"
                  required={true}
                  onChange={this.handleTextChange}
                  value={this.state.walletAddress}
                  placeholder="address"
                />
                <div className="flex-row-around">
                  <TextInput
                    htmlId="additionalValue"
                    name="additionalValue"
                    label="Additional Value to send (eth)"
                    type="number"
                    required={true}
                    onChange={this.handleTextChange}
                    value={this.state.additionalValue}
                    placeholder="eth"
                  />
                  <input
                    id="addValue"
                    type="submit"
                    className="button"
                    styleName="paymentForm-addButton"
                    value="Add"
                    onClick={this.handleAddValue}
                  />
                </div>
                <input
                  id="reserve"
                  type="submit"
                  className="button"
                  styleName="paymentForm-submitButton"
                  value={"Send " + this.state.total.toFixed(3) + " ETH"}
                  onClick={this.handleSubmit}
                />
              </form>
            </fieldset>
          }
        </div>
      </div>
    )
  }
}

export default Payment
