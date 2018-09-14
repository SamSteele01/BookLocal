import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css?raw'
import { Lokka } from 'lokka'
import { Transport } from 'lokka-transport-http'
import uniqueId from 'react-html-id'

import SearchForm from '../SearchForm'
import SearchResults from '../SearchResults'
import hotelABI from 'abis/hotelABI'
import './searchView.css'

const client = new Lokka({
  transport: new Transport('https://api.booklocal.in/graphql')
});

export default class SearchView extends Component {

  static propTypes = {
    reservationData: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      // search input
      city: '',
      startDate: moment(),
      endDate: moment().add(1, 'd'),
      // search results
      display: null,
      hotelResultsArray: [],
    };
    uniqueId.enableUniqueIds(this)
    this.handleSubmitHotelSearch = this.handleSubmitHotelSearch.bind(this)
  }

  // handleTextChange = (event) => {
  //   if(this.state[event.target.id] !== undefined) {
  //     this.setState({[event.target.id]: event.target.value});
  //   }
  // }
  setCity = (string) => {
    this.setState({ city: string });
  }
  handleDateChangeStart = (date) => {
    this.setState({ startDate: date });
  }
  handleDateChangeEnd = (date) => {
    this.setState({ endDate: date });
  }
  dateConverter = (date) => {
    return Math.floor(moment(date).unix() / 86400);
  }

  /* (city, checkIn, checkOut) =>
  * query allHotels(city) { return hotel, profile, [roomTypes] }
  * listOfHotels.map => { compile [roomTypes] }
  * listOfRoomTypes.filter(hasAvailability(roomType, checkIn, checkOut)) =>
  * "goList".map => search results
  *
  * data = {
  * hotelName
  * hotelImage
  * hotelAddress *
  * roomTypeIndex *
  * beds
  * price *
  * }
  */

  async getHotelDataFromDB(city) {
    // hotelAddressArray => hotelDataArray
    let hotelsArray = ''
    await client.query(`{
      allHotels(city: ${city}){
        id
        ethAddress
        hotelProfile{
          id
          name
          city
          images
        }
        roomTypes{
          id
          index
          beds
          price
        }
      }
    }`)
    .then(data => {
      if (data.hotel !== null) {
        hotelsArray = data.allHotels
      }
    }).catch(error => {
      console.log(error)
      this.setState({ queryError: 'query error' })
    })
    return hotelsArray
  }

  /* assumes that web3 is provided by the browser */

  async handleSubmitHotelSearch(event) {
    event.preventDefault();
    console.log("Search fired!");
    this.setState({ display: 'loading' })
    /* getHotelDataFromDB(city) => hotelsArray */
    let hotelsArray = await this.getHotelDataFromDB(this.state.city)
    /* filter rooms with no availability */
    let hotelsWithAvailableRooms = await hotelsArray.map(hotel => {
      let availableRooms = hotel.roomTypes.filter(async roomType => {
        await window.web3.eth.contract(hotelABI).at(hotel.ethAddress)
          .hasAvailability(
            roomType.index,
            this.dateConverter(this.state.startDate),
            this.dateConverter(this.state.endDate),
          )
      })
      return availableRooms.map(room => {
        return Object.assign(hotel, { roomTypes: room })
      })
    })
    console.log('HOTELSWITHAVAILABLEROOMS', hotelsWithAvailableRooms)
    /* filter hotels without rooms */
    // let hotelResultsArray = hotelsWithAvailableRooms.filter(hotel =>
    //   hotel.roomTypes.length >= 1
    // )
    /* return */
    this.setState({
      hotelResultsArray: hotelsWithAvailableRooms,
      display: 'results'
    })
  }

  render() {
    return (
      <div styleName="search-container">
        <div styleName="search-bar">
          <div className="formGroup" styleName="citySearch">
            <SearchForm
              setCity={this.setCity}
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
        { this.state.display &&
          <div styleName="results">
            <SearchResults
              display={this.state.display}
              hotelResultsArray={this.state.hotelResultsArray}
              reservationData={this.props.reservationData}
            />
          </div>
        }
      </div>
    );
  }

}
