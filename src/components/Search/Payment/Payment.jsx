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
      ccNumber: null,
      ccName: '',
      ccExpiry: '',
      ccCvc: null,
      focused: '',
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
  updateCcFormState = (value, source) => {
    if(source === 'number') {
      this.setState({ccNumber: value});
    } else if(source === 'expiry') {
      this.setState({ccExpiry: value});
    } else if(source === 'cvc') {
      this.setState({ccCvc: value});
    }
  }
  hidePaymentForm = (event) => {
    this.props.showPaymentForm(false);
  }
  togglePaymentType = () => {
    // change state of paymentTypeToggle to false to display the ETH/Metamask form, true for CCs
    // state change is passed via onClick events on the divs for each tab
    if(this.state.showHideEthForm === 'isVisible' && this.state.showHideCcForm === 'isHidden') {
     this.setState({showHideEthForm: 'isHidden', showHideCcForm: 'isVisible'});
    } else {
      this.setState({showHideEthForm: 'isVisible', showHideCcForm: 'isHidden'});
    }
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
       <ul styleName="form-tabContainer">
          <li styleName="form-tabEth" onClick={this.togglePaymentType}><a>ETH</a></li>
          <li styleName="form-tabCredit" onClick={this.togglePaymentType}><a>Credit Card</a></li>
       </ul>
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
        <form styleName="paymentForm" className={this.state.showHideCcForm}>
          <Number 
            onChange={({value, valid}) => updateCcFormState(value, 'number')}
            value={this.state.ccNumber}
            render={({ getInputProps, value, valid }) => (
              <div className="formGroup">
              <label for="ccNumber">Credit Card Number</label>
              <input required={true} id="ccNumber" styleName="paymentForm-ccNumber" {...getInputProps() } />
              </div>
            )}
          />
          <Expiration
            onChange={({value, valid}) => updateCcFormState(value, 'expiry')}
            value={this.state.ccExpiry}
            render={({ getInputProps, value, valid, error, month, year }) => (
              <div className="formGroup">
              <label for="ccExpiry">Expiration Date</label>
              <input id="ccExpiry" required={true} styleName="paymentForm-ccExpiry" {...getInputProps() } />
              </div>
            )}
          />
          <Cvc
            onChange={({value, valid}) => updateCcFormState(value, 'cvc')}
            value={this.state.ccCvc}
            render={({ getInputProps, value, valid }) => (
              <div className="formGroup">
              <label for="ccCvc">CVC Code</label>
              <input id="ccCvc" required={true} styleName="paymentForm-ccCvc" {...getInputProps() } />
              </div>
            )}
          />
          <label for="ccName">Name on Card</label>
          <input type="text" id="ccName" name="ccName" required={true} placeholder="Name on card" value={this.state.ccName} onChange={this.handleTextChange} styleName="paymentForm-ccName" />
          <input id="reserve" type="submit" className="button" styleName="paymentForm-submitButton" value="Reserve room" onClick={this.handleSubmit} />
        
        </form>
          </div>
      
        </div>
        
    )
  }
}

export default Payment