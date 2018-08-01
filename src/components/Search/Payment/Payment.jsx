import React, { Component } from 'react'
import PropTypes from 'prop-types'
import getWeb3 from 'utils/getWeb3'
import TextInput from 'components/TextInput'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { Number, Cvc, Expiration } from 'react-credit-card-primitives'
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
    return(
       <div styleName="form-container">
       <a styleName="form-close" onClick={this.hidePaymentForm}><FontAwesomeIcon icon={faTimes} size="3x" /></a>
       <div styleName="form-header">
          <div styleName="form-title">Payment for reservation</div>
       </div>
       <div styleName="form-content">
        <div styleName="reservationDetails">
            <p styleName="reservationDetails-price">Price: ETH</p>
            <p styleName="reservationDetails-dates">Dates: A to B</p>
            <p styleName="reservationDetails-hotelName">Hotel: with address etc.</p>
          </div>
        <form styleName="paymentForm paymentForm-eth" className={this.state.showHideEthForm} >
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
          <input id="reserve" type="submit" className="button" styleName="paymentForm-submitButton" value="Reserve room" onClick={this.handleSubmit} />
        </form>
        
          </div>
      
        </div>
        
    )
  }
}

export default Payment