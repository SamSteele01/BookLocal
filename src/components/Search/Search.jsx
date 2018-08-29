import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SearchView from './SearchView'
import TravelerInfoForm from './TravelerInfoForm'
import HotelContractWrapper from 'components/HotelContractWrapper';
import uniqueId from 'react-html-id'

import './Search.css'

// TODO: Figure out autocomplete / suggest functionality?

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // nav
        searchSubmitted: false,
        showTravelerInfoForm: false,
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

  returnSearchResults = (query) => {
    // send data to SearchResults
    this.setState({
      showTravelerInfoForm: true,
    });
  }

  /* get from SearchResultsItem, pass to HotelContractWrapper, to Payment */
  reservationData = (resData) => {
    this.setState({
      reservationData: resData, // ? => vvv
      hotelAddress: "0x88982d815bc97c00e42d4e91b5d73d0c6ae01a5b",
      roomTypeIndex: 1,
      price: resData.totalPrice,
      showTravelerInfoForm: true,
    })
  }

  /* Navigation */
  backToSearchResults = (event) => {
    this.setState({ showTravelerInfoForm: false });
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
        { this.state.showTravelerInfoForm ?
          <TravelerInfoForm
            showPaymentForm={this.showPaymentForm}
            backToSearchResults={this.backToSearchResults}
            checkInDate={this.state.startDate}
            checkOutDate={this.state.endDate}
            price={this.state.price}
            reservationData={this.state.reservationData}
          />
        :
          <SearchView
            reservationData={this.reservationData}
          />
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
      </div>
    )
  }
}

export default Search
