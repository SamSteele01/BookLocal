import React, { Component } from 'react'
import PropTypes from 'prop-types'
import getWeb3 from 'utils/getWeb3'
import TextInput from 'components/TextInput'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import moment from 'moment'
import './Payment.css'


class Payment extends Component {
  static propTypes = {
    web3: PropTypes.object.isRequired,
    contract: PropTypes.object,
    address: PropTypes.string
  }
  constructor(props) {
    super(props)
    this.state = {
      paymentAmountETH: null,
      walletAddress: null,
      submitted: false,
      paymentTypeToggle: false,
      transactionId: null,
      showHideEthForm: 'isVisible',
      showHideCcForm: 'isHidden'
    }
  this.handleSubmit=this.handleSubmit.bind(this);
  this.handleTextChange=this.handleTextChange.bind(this);
  }
  
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Payment submission sent!");
  }
  handleTextChange = (event) => {
    if(this.state[event.target.id] !== undefined) {
      this.setState({[event.target.id]: event.target.value});
    }
  }
  hidePaymentForm = (event) => {
    this.props.showPaymentForm(false);
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