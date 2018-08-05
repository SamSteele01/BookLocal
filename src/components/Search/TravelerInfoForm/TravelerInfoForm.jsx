import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TextInput from 'components/TextInput'
import { Lokka } from 'lokka'
import { Transport } from 'lokka-transport-http'
import moment from 'moment'
import ResDetails from '../ResDetails';
import './TravelerInfoForm.css'

const client = new Lokka({
  transport: new Transport('http://localhost:8080/graphql')
});

class TravelerInfoForm extends Component {
  static propTypes = {

  }
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      phoneNumber: '',
      // email: '',
      preferences: '',
      // submitted: false
    }
  this.handleSubmit=this.handleSubmit.bind(this);
  this.handleTextChange=this.handleTextChange.bind(this);
  }

  handleTextChange = (event) => {
    if(this.state[event.target.id] !== undefined) {
        this.setState({[event.target.id]: event.target.value});
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submit fired!");
      // get account[0] from MetaMask
      let inputObject = Object.assign({ ethAddress: window.web3.eth.accounts[0] }, this.state)
      console.log('INPUTOBJECT', inputObject)
      // send updated state values to DB
      // let traveler = this.submitTravelerInfo(inputObject)
      // confirm initial submission
      // console.log('TRAVELER', traveler)
      // trigger view change to Payment modal (without navigating away)
      this.props.showPaymentForm(true);
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

  navigateBack = (event) => {
    this.props.reserveClicked(false);
  }

  render() {
    const startDate = moment(this.props.checkInDate).format("MMM Do, YYYY");
    const endDate = moment(this.props.checkOutDate).format("MMM Do, YYYY");
      return(
        <div styleName="reservation-container">
          <div
            styleName="reservation-card"
            className="access"
            >
            <div styleName="backToSearchResults">
              <a
                onClick={this.props.backToSearchResults}>
                &#60; Go back to search results
              </a>
            </div>
            {/* <div styleName="reservation-info">
              <p>You've chosen the {this.props.reservationData.name} for
                {this.props.reservationData.price} ETH per night!</p>
              <p>Please enter your info below before moving on to paying for
                your room.</p>
            </div> */}
            <ResDetails
              price={this.props.price}
              reservationData={this.props.reservationData}
              startDate={startDate}
              endDate={endDate}
            />
            <div
              className="formGroup"
              styleName="travelerForm-container"
            >
              <div styleName="traveler-info-form">
                <div styleName="formHeader">
                <h4>Create your profile</h4>
                </div>
                <form styleName="form">
                  <fieldset
                    // className="formGroup"
                    >
                    <TextInput
                      htmlId="name"
                      name="name"
                      label="Name"
                      type="text"
                      required={true}
                      onChange={this.handleTextChange}
                      placeholder="First Last"
                      value={this.state.name}
                      // className="form-inputName"
                    />
                    <TextInput
                      htmlId="phoneNumber"
                      name="phoneNumber"
                      label="Phone Number"
                      type="phone"
                      required={true}
                      onChange={this.handleTextChange}
                      placeholder="+1 462-236-5134"
                      value={this.state.phoneNumber}
                      // className="form-inputPhone"
                    />
                    <TextInput
                      htmlId="email"
                      name="email"
                      label="Email Address"
                      type="email"
                      required={true}
                      onChange={this.handleTextChange}
                      value={this.state.email}
                      placeholder="Email@example.com"
                      // className="form-inputEmail"
                    />
                    <div className="flex-column-start">
                      <label
                        htmlFor="preferences"
                        styleName="form-inputPreferencesLabel"
                      >
                        Preferences
                      </label>
                      <textarea
                        styleName="form-inputPreferences"
                        id="preferences"
                        name="preferences"
                        value={this.state.preferences}
                        onChange={this.handleTextChange}
                        required={false}
                        placeholder="Enter any preferences here"
                      />
                    </div>
                  </fieldset>
                  <input
                    type="submit"
                    className="button"
                    styleName="form-inputButton"
                    onClick={this.handleSubmit}
                    value="Proceed to Payment"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      )
  }

}

export default TravelerInfoForm
