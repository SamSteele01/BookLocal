import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css?raw'
import SearchForm from './SearchForm'
import SearchResults from './SearchResults'
import TravelerInfoForm from 'components/TravelerInfoForm'
import uniqueId from 'react-html-id'
import Payment from './Payment'

import style from './Search.css'


// TODO: Figure out autocomplete / suggest functionality?

class Search extends Component {
  constructor(props) {
    super(props)
            uniqueId.enableUniqueIds(this)
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
  uniqueId.enableUniqueIds(this)
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
    const queryResult = ['memphis', '20180820', '08232018']; // in practice will receive JSON response. Dummy if needed.
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
        <div styleName="style.searchBox-container">
        <div styleName="style.container-header">
          <h1>Search for a hotel</h1>
        </div>
      {this.state.showReservationForm &&
        <a styleName="backToSearchResults" onClick={this.backToSearchResults}>&#60; Go back to search results</a>          
      }  
      {!this.state.showReservationForm ?
        <div styleName="style.searchBar-container">  
        <div className="formGroup" styleName="style.citySearch">
            <SearchForm 
              getSearchString={this.getSearchString}
            />
          </div>
 
          <div className="formGroup" styleName="style.startDate">          
            <label htmlFor={this.nextUniqueId()}>Start Date</label>
            <DatePicker
              id={this.lastUniqueId()}
              selected={this.state.startDate}
              onChange={this.handleDateChangeStart}
              selectsStart
              startDate={this.state.startDate}
              endDate={this.state.endDate}
              placeholderText="Check-in date"
              className="startDate-datePicker formInput"
              htmlId="startDate"
            />
          </div> 
          <div className="formGroup" styleName="style.endDate">
            <label htmlFor={this.nextUniqueId()}>End Date</label>
            <DatePicker
              id={this.lastUniqueId()}
              selected={this.state.endDate}
              onChange={this.handleDateChangeEnd}
              SelectsEnd
              startDate={this.state.startDate}
              endDate={this.state.endDate}
              placeholderText="Check-out Date"
              className="endDate-datePicker formInput"
              htmlId="endDate"
            />
          </div> 
          <div className="formGroup" styleName="style.searchSubmit">
            <button onClick={this.handleSubmit}className="button" styleName="style.searchSubmitButton" value="Search for hotels">Search for hotels</button>
          </div> 
        </div>
        : null
        }
        {this.state.showReservationForm ?
          <div styleName="reservation-container">
          <div styleName="reservation-info">
            <p>Youv'e chosen the {this.state.reservationData.name} for {this.state.reservationData.price} ETH per night!</p>
            <p>Please enter your info below before moving on to paying for your room.</p>
          </div>
          <div className="formGroup" styleName="style.travelerForm-container">
            <TravelerInfoForm showPaymentForm={this.showPaymentForm}/>
          </div>
          </div>
          : null
        }
        {this.state.showPaymentForm ?
          <div styleName="style.paymentForm-modal active" id="payment-modal">
          <a href="#close" styleName="modalOverlay" aria-label="Close" onClick={() => this.showPaymentForm(false)}>
          </a>
            <Payment showPaymentForm={this.showPaymentForm} reservationData={this.state.reservationData} bookingDates={this.state.results} />
          </div> 
          : null
        }
      </div>
      {this.state.searchSubmitted && !this.state.showReservationForm && 

        <div styleName="style.results">
          <SearchResults searchQuery={this.state.results} searchRunning={this.state.searchSubmitted} reserveClicked={this.reserveClicked} reservationData={this.reservationData}/>
        </div>
      }
    </div>
    )
  }
}

export default Search