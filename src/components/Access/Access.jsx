import React, { Component } from 'react';
import PropTypes from 'prop-types'
import moment from 'moment'
import ResContractWrapper from 'components/ResContractWrapper';
import './access.css';

class Access extends Component{
  static propTypes = {
    web3: PropTypes.object,
    account: PropTypes.string
  }
  constructor(props){
    super(props)
    this.state = {
      account : '',
      displayAccessCard: false,
      traveler: {},
      hotel: {},
      hotelProfile: {},
      renderDetails: false,
    }
  }

  componentDidMount() {
    this.setState({ account: this.props.account })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.account !== this.props.account) {
      this.setState({ account: this.props.account })
    }
  }

  handleTextChange = (event) => {
    if(this.state[event.target.id] !== undefined){
      this.setState({[event.target.id]: event.target.value});
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Access fired!");
    // query server with reservation address or traveler Id
    console.log('THIS.PROPS.ACCOUNT', this.props.account)
    // fake login
    if (this.props.account ===
      '0xb37a07ffcd1ec4fbc77583cc176e0809b40ff710') {
      // get data on hotel, reservation, roomType
      // redirect
      this.setState({
        displayAccessCard: true,
        traveler: { name: 'John Doe' },
        hotelProfile: {
          name: 'The Exchange Building',
          city: 'Memphis',
          state: 'TN'
        },
        reservation: {
          address: '0x51b9f6c0a70cf0c6550c5397800e180e4390d8ef',
          initialBalence: .6,
          price: .6,
          checkIn: moment().add(5, 'd').format('MMM Do, YYYY'),
          checkOut: moment().add(8, 'd').format('MMM Do, YYYY'),
        }
      })
    } else {
      this.setState({ error: 'No reservations found for that address.' })
    }
  }

  toggleDetailsRender = () => {
    this.setState({ renderDetails: !this.state.renderDetails })
  }

  handleCheckOut = () => {
    console.log('check out!')
    this.setState({ checkingOut: true })
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

  render(){
    return(
      <div className="home darken">
        <div styleName="access">
          <fieldset>
            { !this.state.displayAccessCard ?
              <div>
                <h1>Check In</h1>
                <div>Make sure to set MetaMask to the same address that was
                  used to reserve your room.
                </div>
                { this.state.error &&
                  <div className="reserve-warning">
                    {this.state.error}
                  </div>
                }
                <div className="label-style">Address:
                  <input
                    id="account"
                    type="text"
                    className="input-style"
                    onChange={this.handleTextChange}
                    value={this.state.account}
                  />
                </div>
                { !this.props.account ?
                  <div>
                    <div className="reserve-warning">
                      Please log in to MetaMask.
                    </div>
                    <input
                      id="search"
                      type="submit"
                      className="input-button-style disabled"
                      value="Check In"
                      onClick={this.handleSubmit}
                      disabled
                    />
                  </div>
                :
                  <input
                    id="search"
                    type="submit"
                    className="input-button-style"
                    value="Check In"
                    onClick={this.handleSubmit}
                  />
                }
              </div>
            :
              <div>
                <div className="label-style">
                  Hello {this.state.traveler.name}
                </div>
                <div className="label-style">
                  Upcoming stays:
                </div>
                { !this.state.checkingOut ?
                  <div styleName="wire-frame-box">
                    <div styleName="label-style" >
                      Reservation address
                      <input
                        id="resAddress"
                        type="text"
                        styleName="input-style"
                        value={this.state.reservation.address}
                        readOnly
                      />
                    </div>
                    <div styleName="row space-around" >
                      <div
                        // className="label-style"
                        styleName="label-style h-spacing">
                        {this.state.hotelProfile.name}
                      </div>
                      <div
                        // className="label-style"
                        styleName="label-style h-spacing">
                        {this.state.hotelProfile.city},
                        {this.state.hotelProfile.state}
                      </div>
                    </div>
                    <div styleName="row space-around" >
                      <div
                        // className="label-style"
                        styleName="label-style h-spacing">
                        {this.state.reservation.checkIn}
                      </div>
                      <div
                        // className="label-style"
                        styleName="label-style h-spacing">
                        {this.state.reservation.checkOut}
                      </div>
                    </div>
                    { this.state.renderDetails &&
                      <div styleName="visit-details">
                        <hr/>
                        <div styleName="label-style">
                          Info
                          <input
                            id="info"
                            type="text"
                            styleName="input-style"
                            value="Have ID ready at check in."
                            readOnly
                          />
                        </div>

                        <div styleName="label-style">
                          Directions
                          <input
                            id="directions"
                            type="button"
                            styleName="form-inputButton"
                            value="Copy Address to Clipboard"
                            readOnly
                          />
                          <input
                            id="amenities"
                            type="button"
                            styleName="form-inputButton"
                            value="Open Map"
                            readOnly
                          />
                        </div>
                        <div styleName="label-style">
                          Hotel Amenities
                          <input
                            id="amenities"
                            type="text"
                            styleName="input-style"
                            value="Laundry service, kitchenette"
                            readOnly
                          />
                        </div>
                        <hr/>
                        <div styleName="label-style">
                          Initial Ammount
                          <input
                            id="initialAmmount"
                            type="text"
                            styleName="input-style"
                            value="0.6 Eth"
                            readOnly
                          />
                        </div>
                        <div styleName="label-style">
                          Reservation
                          <input
                            id="reservation"
                            type="text"
                            styleName="input-style"
                            value="0.4 Eth"
                            readOnly
                          />
                        </div>
                        <div styleName="label-style">
                          Purchases
                          <input
                            id="purchases"
                            type="text"
                            styleName="input-style"
                            value="0 Eth"
                            readOnly
                          />
                        </div>
                        <div styleName="label-style">
                          Balance
                          <input
                            id="balance"
                            type="text"
                            styleName="input-style"
                            value="0.2 Eth"
                            readOnly
                          />
                        </div>
                        <input
                          id="search"
                          type="submit"
                          // className="input-button-style"
                          styleName="eth-button"
                          value="Check Out"
                          onClick={this.handleCheckOut}
                        />
                      </div>
                    }
                    <div className="input-button-style"
                      onClick={this.toggleDetailsRender}
                    >
                      { this.state.renderDetails ?
                        "Hide Details"
                      :
                        "Click to Access"
                      }
                    </div>
                  </div>
                :
                  <ResContractWrapper
                    address={this.state.reservation.address}
                  />
                }
              </div>
            }
          </fieldset>
        </div>
      </div>
    )
  }
}

export default Access
