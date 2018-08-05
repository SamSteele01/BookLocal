import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Lokka } from 'lokka'
import { Transport } from 'lokka-transport-http'
// import getWeb3 from 'utils/getWeb3'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import moment from 'moment'

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
      submitted: false,
      paymentTypeToggle: false,
      transactionId: null,
      showHideEthForm: 'isVisible',
      showHideCcForm: 'isHidden'
    }
  this.handleSubmit=this.handleSubmit.bind(this);
  this.handleTextChange=this.handleTextChange.bind(this);
  }

  handleTextChange = (event) => {
    if(this.state[event.target.id] !== undefined) {
      this.setState({[event.target.id]: event.target.value});
    }
  }
  hidePaymentForm = (event) => {
    this.props.showPaymentForm(false);
  }
  dateConverter = (mmddyyyy) => {
    return Math.floor(moment(mmddyyyy).unix() / 86400);
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
        value: web3.toWei(this.props.price, 'ether'),
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

  async submitTravelerInfo(input) {
    // hotelAddressArray => hotelDataArray
    let traveler = ''
    let address = ''
    let string = `($input: TravelerInput!){
      addNewTraveler(input: $input){
        id
        ethAddress
        name
        phoneNumber
        preferences
      }
    }`
    let variable = { input: input }
    await client.mutate(string, variable)
    .then(data => {
      traveler = data
      address = data.addNewTraveler.ethAddress
    }).catch(error => console.log(error))
    return { traveler, address }
  }

  render() {
    // display payment form
    // display price in ETH future TODO: display in multiple currencies
    // Create form with wallet address or handle via Metamask?
    // Submit payment and send out for confirmation
    // TODO: Decide if the reservation Details aspects are necessary in this window.
        // stringify dates
        const startDate = moment(this.props.bookingDates[1]).format("MMM Do, YYYY");
        console.log(startDate);
        const endDate = moment(this.props.bookingDates[2]).format("MMM Do, YYYY");
        console.log(endDate);
    return(
       <div styleName="form-container">
       <a styleName="form-close" onClick={this.hidePaymentForm}><FontAwesomeIcon icon={faTimes} size="2x" /></a>
       <div styleName="form-header">
          <div styleName="form-title"><h1>Payment for reservation</h1></div>
       </div>
       <div styleName="form-content">
        <div styleName="reservationDetails">
        <div styleName="reservationDetails-header"><h4>Booking details</h4></div>
        <p styleName="reservationDetails-hotelName">Room at {this.props.reservationData.name}</p>
            <p styleName="reservationDetails-beds">Beds: {this.props.reservationData.beds}</p>
            <p styleName="reservationDetails-price">Price: {this.props.reservationData.price} ETH</p>
            <p styleName="reservationDetails-dates">Dates: {startDate} to {endDate} </p>
          </div>
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
          <input id="reserve" type="submit" className="button" styleName="paymentForm-submitButton" value={"Pay " + this.props.reservationData.price + " ETH"} onClick={this.handleSubmit} />
        </form>
        
          </div>
      
        </div>
        
    )
  }
}

export default Payment