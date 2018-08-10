import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css?raw'
import SearchForm from './SearchForm'
import SearchResults from './SearchResults'
import TravelerInfoForm from './TravelerInfoForm'
import HotelContractWrapper from 'components/HotelContractWrapper';
import uniqueId from 'react-html-id'
import Payment from './Payment'

import './Search.css'

// TODO: Figure out autocomplete / suggest functionality?

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // search input
        searchString: '',
        startDate: moment(),
        endDate: moment().add(1, 'd'),
      // search
        searchQuery: {},
        searchResults: [],
      // nav
        searchSubmitted: false,
        showReservationForm: false,
        showPaymentForm: false,
      // to payment
        hotelAddress: null, // hard code, eventually from Results
        roomTypeIndex: 1, // hard code, eventually from Results
        checkInDate: null,
        checkOutDate: null,
        price: null,
        reservationData: [],
    }
    uniqueId.enableUniqueIds(this)
    // this.handleSubmit=this.handleSubmit.bind(this);
    // this.handleTextChange=this.handleTextChange.bind(this);
  }

  handleTextChange = (event) => {
    if(this.state[event.target.id] !== undefined) {
      this.setState({[event.target.id]: event.target.value});
    }
  }
  setSearchString = (string) => {
    this.setState({ searchString: string });
  }
  handleDateChangeStart = (date) => {
      this.setState({ startDate: date });
    }
  handleDateChangeEnd = (date) => {
    this.setState({ endDate: date });
    }
  dateConverter = (mmddyyyy) => {
    return Math.floor(moment(mmddyyyy).unix() / 86400);
    }

  handleSubmitHotelSearch = (event) => {
    event.preventDefault();
    console.log("Search fired!");
    // convert time strings for use by DB
    let query = {
      searchString: this.state.searchString,
      start: this.dateConverter(this.state.startDate),
      end: this.dateConverter(this.state.endDate),
    }
    this.setState({
      searchQuery: query,
      searchSubmitted: true,
    })
    // bringing in this.state.searchString, start, and end
    // this.returnSearchResults(query);
  }

  // returnSearchResults = (query) => {
  //   // send data to SearchResults
  //   this.setState({
  //     showReservationForm: true,
  //   });
  // }

  /* get from SearchResultsItem, pass to HotelContractWrapper, to Payment */
  reservationData = (resData) => {
    this.setState({
      reservationData: resData,
      hotelAddress: "0x88982d815bc97c00e42d4e91b5d73d0c6ae01a5b",
      roomTypeIndex: 1,
      price: resData.totalPrice,
      showReservationForm: true,
    })
  }

  /* Navigation */
  backToSearchResults = (event) => {
    this.setState({ showReservationForm: false });
  }
  showPaymentForm = (event) => {
    console.log('spf !')
    this.setState({ showPaymentForm: event });
  }

  // TODO: Import TextInputBEM into this repo
  render() {
    return(
      <div
        // className="card"
        styleName="container"
      >
        {/* <div styleName="style.container-header">
          <h1>Search for a hotel</h1>
        </div> */}
        { this.state.showReservationForm ?
          <TravelerInfoForm
            showPaymentForm={this.showPaymentForm}
            backToSearchResults={this.backToSearchResults}
            checkInDate={this.state.startDate}
            checkOutDate={this.state.endDate}
            price={this.state.price}
            reservationData={this.state.reservationData}
          />
        :
          <div styleName="search-container">
            <div styleName="search-bar">
              <div className="formGroup" styleName="citySearch">
                <SearchForm
                  setSearchString={this.setSearchString}
                />
              </div>
              <div className="formGroup" styleName="startDate">
                <label htmlFor={this.nextUniqueId()}>Start Date</label>
                <DatePicker
                  id={this.lastUniqueId()}
                  selected={this.state.startDate}
                  onChange={this.handleDateChangeStart}
                  selectsStart
                  // maxDate={this.state.endDate}
                  startDate={this.state.startDate}
                  endDate={this.state.endDate}
                  placeholderText="Check-in date"
                  className="startDate-datePicker formInput"
                  htmlId="startDate"
                />
              </div>
              <div className="formGroup" styleName="endDate">
                <label htmlFor={this.nextUniqueId()}>End Date</label>
                <DatePicker
                  id={this.lastUniqueId()}
                  selected={this.state.endDate}
                  onChange={this.handleDateChangeEnd}
                  SelectsEnd
                  minDate={this.state.startDate}
                  startDate={this.state.startDate}
                  endDate={this.state.endDate}
                  placeholderText="Check-out Date"
                  className="endDate-datePicker formInput"
                  htmlId="endDate"
                />
              </div>
              <div className="formGroup" styleName="searchSubmit">
                <button
                  onClick={this.handleSubmitHotelSearch}
                  className="button"
                  styleName="searchSubmitButton"
                  value="Search for hotels"
                >
                  Search for hotels
                </button>
              </div>
            </div>
          </div>
        }
        { this.state.showPaymentForm &&
          <div
            styleName="paymentForm-modal active"
            id="payment-modal"
          >
            <a href="#close"
              styleName="modalOverlay"
              aria-label="Close"
              onClick={() => this.showPaymentForm(false)}
            >
            </a>
            <HotelContractWrapper // Payment
              web3={this.props.web3}
              address={this.state.hotelAddress}
              roomTypeIndex={this.state.roomTypeIndex}
              checkInDate={this.state.startDate}
              checkOutDate={this.state.endDate}
              price={this.state.price}
              reservationData={this.state.reservationData}
              showPaymentForm={this.showPaymentForm}
            />
          </div>
        }
        { this.state.searchSubmitted &&
          <div styleName="results">
            <SearchResults
              searchQuery={this.state.searchQuery}
              searchRunning={this.state.searchSubmitted}
              reserveClicked={this.reserveClicked}
              reservationData={this.reservationData}
            />
          </div>
        }
      </div>
    )
  }
}

export default Search
