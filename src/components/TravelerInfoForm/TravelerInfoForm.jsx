import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TextInput from 'components/TextInput'
import { Lokka } from 'lokka'
import { Transport } from 'lokka-transport-http'
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
      let traveler = this.submitTravelerInfo(inputObject)
      // confirm initial submission
      console.log('TRAVELER', traveler)
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
      return(
        <div styleName="traveler-info-form">
          <div styleName="formHeader">
          <h4>Create your profile</h4>
          </div>
          <form styleName="form">
            <fieldset className="formGroup">
              <TextInput
                htmlId="name"
                name="name"
                label="Name"
                type="text"
                required={true}
                onChange={this.handleTextChange}
                placeholder="First Last"
                value={this.state.name}
                className="form-inputName"
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
                className="form-inputPhone"
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
                className="form-inputEmail"
              />
              <label
                for="preferences"
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
            </fieldset>
            <input
              type="submit"
              className="button"
              styleName="form-inputButton"
              onClick={this.handleSubmit}
              value="Submit"
            />
          </form>
        </div>
      )
  }

}

export default TravelerInfoForm
