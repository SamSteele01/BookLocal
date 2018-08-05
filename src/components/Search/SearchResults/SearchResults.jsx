import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Lokka } from 'lokka'
import { Transport } from 'lokka-transport-http'
import SearchResultsItem from './SearchResultsItem'
import './SearchResults.css'

const client = new Lokka({
  transport: new Transport('http://localhost:8080/graphql')
});

// minimum result object elements:
// name, id, state/zip, price/night, beds, rating?,
// extended view: ameneties, pool, etc.

const searchResults = [
    {name: 'The Exchange Building', city: 'Memphis', beds: 2,
      price: 2.2, imgSrc: '/media/hotel1.jpg'},
    {name: 'Hotel #2', city: 'Memphis', beds: 2,
      price: 4, imgSrc: '/media/hotel1.jpg'},
    {name: 'Hotel #3', city: 'Memphis', beds: 1,
      price: 1.5, imgSrc: '/media/hotel1.jpg'},
    {name: 'Hotel #4', city: 'Memphis', beds: 2,
      price: 1, imgSrc: '/media/hotel1.jpg'},
    {name: 'Hotel #5', city: 'Memphis', beds: 3,
      price: 10, imgSrc: '/media/hotel1.jpg'},
    {name: 'Hotel #6', city: 'Memphis', beds: 1,
      price: 1.1, imgSrc: '/media/hotel1.jpg'},
    {name: 'Hotel #7', city: 'Memphis', beds: 2,
      price: 2.2, imgSrc: '/media/hotel1.jpg'},
    {name: 'Hotel #8', city: 'Memphis', beds: 2,
      price: 2.15, imgSrc: '/media/hotel1.jpg'},
    {name: 'Hotel #9', city: 'Memphis', beds: 1,
      price: 4, imgSrc: '/media/hotel1.jpg'},
    {name: 'Hotel #10', city: 'Memphis', beds: 2,
      price: 5.5, imgSrc: '/media/hotel1.jpg'},
    {name: 'Hotel #11', city: 'Memphis', beds: 1,
      price: 0.5, imgSrc: '/media/hotel1.jpg'},
]

class SearchResults extends Component {
    static propTypes = {
      SearchResults: PropTypes.array
    }
    constructor(props) {
        super(props)
        this.state = {
            query: this.props.searchQuery,
            listReady: false
        }
    }
    reserveClicked = (event) => {
        this.props.reserveClicked();
        this.props.reservationData(event);
    }
    // call an update on the query value, if necessary?
    // getSearchQuery = () => {
    //    this.setState({query: this.props.results});
    // }
    generateSearchResultList() {
      let searchResultsList = null
      if (searchResults !== null && searchResults !== undefined) {
        searchResultsList = searchResults.map((searchObject, index) => {
          return <SearchResultsItem
            key={index}
            searchObject={searchObject}
            callback={this.reserveClicked}
          />
        })
      }
      return searchResultsList
    }
    async searchHotels(input) {
      let hotels = ''
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
      await client.query(string, variable)
      .then(data => {
        hotels = data
        address = data.addNewTraveler.ethAddress
      }).catch(error => console.log(error))
      return { hotels, address }
    }

    render() {
        /* take in the query info and also receive another object that has
        either a) the entire list or b) the filtered result returned from
        GraphQL (requires function call / binding ) error if results = 0
        map that list to a set of nested divs with each room/hotel result
        include a reservation button reservation button calls the existing
        Reserve component to confirm dates */
        return(
            <div styleName="search-results">
            {this.props.searchRunning &&
                    this.generateSearchResultList()

            }
            </div>
        )
    }
}

export default SearchResults
