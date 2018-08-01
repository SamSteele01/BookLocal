import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css?raw'
import SearchForm from './SearchForm'
import SearchResults from './SearchResults'
import TravelerInfoForm from 'components/TravelerInfoForm'
import Payment from './Payment'

import style from './Search.css'


// TODO: Figure out autocomplete / suggest functionality?

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
        searchString: '',
        startDate: moment([2018, 4, 7]),
        endDate: moment([2018, 4, 17]),
        results: [],
        searchSubmitted: false,
        showReservationForm: false,
        reservationData: [],
        showPaymentForm: false
    }
  this.handleSubmit=this.handleSubmit.bind(this);
  this.handleTextChange=this.handleTextChange.bind(this);
  }
  handleTextChange = (event) => {
    if(this.state[event.target.id] ==! undefined) {
      this.setState({[event.target.id]: event.target.value});
    }
  }
  handleDateChangeStart = (date) => {
      this.setState({ startDate: date });
    }
  handleDateChangeEnd = (date) => {
    this.setState({ endDate: date});
    }
  dateConverter = (mmddyyyy) => {
    return Math.floor(moment(mmddyyyy).unix() / 86400);
    }
  handleSubmit = (event) => {
    event.preventDefault();
    let start = '';
    let end = '';
    let query = [];
    console.log("Search fired!");
    // convert time strings for use by DB
    start = this.dateConverter(this.state.startDate);
    end = this.dateConverter(this.state.endDate);
    query = [this.state.searchString, start, end];
    console.log(query);
    // bringing in this.state.searchString, start, and end
    this.returnSearchResults(query);
  }
  getSearchString = (string) => {
    this.setState({searchString: string});
  }
  returnSearchResults = (query) => {
    // API fetch would go here with data from event
    // returnObj = fetch('api/endpoint) 
    // method: POST,
    // body: sendObj
    // Receive JSON or other object and set state
    console.log("Returning search result");
    const queryResult = ['memphis', '08202018', '08232018']; // in practice will receive JSON response. Dummy if needed.
    this.setState({ results: queryResult});
    this.setState({searchSubmitted: true});
    // map data to state or props?
// TODO: Import TextInputBEM into this repo
  }
  reserveClicked = (event) => {
    this.setState({showReservationForm: true});
  }
  reservationData = (event) => {
    this.setState({reservationData: event})
  }
  backToSearchResults = (event) => {
    this.setState({showReservationForm: false});
  }
  showPaymentForm = (event) => {
    this.setState({showPaymentForm: event});
  }
  render() {
    return(
      <div className="card" styleName="style.container">
      {this.state.showReservationForm &&
        <a styleName="backToSearchResults" onClick={this.backToSearchResults}>&#60; Go back to search results</a>          
      }  
      {!this.state.showReservationForm &&
          <div className="formGroup" styleName="style.citySearch">
            <SearchForm 
              getSearchString={this.getSearchString}
            />
          </div> }
        {!this.state.showReservationForm &&
          <div className="formGroup" styleName="style.startDate">          
            <DatePicker
              selected={this.state.startDate}
              onChange={this.handleDateChangeStart}
              selectsStart
              startDate={this.state.startDate}
              endDate={this.state.endDate}
              placeholderText="Check-in date"
              className="startDate-datePicker"
            />
          </div> }
        {!this.state.showReservationForm &&
          <div className="formGroup" styleName="style.endDate">
            <DatePicker
              selected={this.state.endDate}
              onChange={this.handleDateChangeEnd}
              SelectsEnd
              startDate={this.state.startDate}
              endDate={this.state.endDate}
              placeholderText="Check-out Date"
              classname="endDate-datePicker"
            />
          </div> }
        {!this.state.showReservationForm && 
          <div className="formGroup" styleName="style.searchSubmit">
            <button onClick={this.handleSubmit}className="button" styleName="style.searchSubmitButton" value="Search for hotels">Search for hotels</button>
          </div> }
        {!this.state.showReservationForm && 
          <div styleName="results">
            <SearchResults searchQuery={this.state.results} searchRunning={this.state.searchSubmitted} reserveClicked={this.reserveClicked} reservationData={this.reservationData}/>
          </div>
        } {/* end showReservationForm check */}
        {this.state.showReservationForm &&
          <div styleName="reservationInfo">
            <p>Youv'e chosen the {this.state.reservationData.name} for {this.state.reservationData.price} ETH per night!</p>
            <p>Complete your info below before moving on to paying for your room.</p>
          </div> }
          {this.state.showReservationForm &&
          <div className="formGroup" styleName="travelerForm-container">
            <TravelerInfoForm showPaymentForm={this.showPaymentForm}/>
          </div>
        }
        {this.state.showPaymentForm &&
          <div styleName="paymentForm-modal active" id="payment-modal">
          <a href="#close" styleName="modalOverlay" aria-label="Close" onClick={() => this.showPaymentForm(false)}>
          </a>
            <Payment showPaymentForm={this.showPaymentForm} />
          </div> 
        }
      </div>
    )
  }
}

export default Search