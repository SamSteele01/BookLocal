import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SearchResultsItem from './SearchResultsItem'
import './SearchResults.css'

// minimum result object elements:
// name, id, state/zip, price/night, beds, rating?,
// extended view: ameneties, pool, etc.

const searchResults = [
    {name: 'The Exchange Building', city: 'Memphis', beds: 2,
      price: .2, imgSrc: '/media/hotel1.jpg'},
    {name: 'Hotel #2', city: 'Memphis', beds: 2,
      price: .18, imgSrc: '/media/hotel1.jpg'},
    {name: 'Hotel #3', city: 'Memphis', beds: 1,
      price: .5, imgSrc: '/media/hotel1.jpg'},
    {name: 'Hotel #4', city: 'Memphis', beds: 2,
      price: .1, imgSrc: '/media/hotel1.jpg'},
    {name: 'Hotel #5', city: 'Memphis', beds: 3,
      price: .12, imgSrc: '/media/hotel1.jpg'},
    {name: 'Hotel #6', city: 'Memphis', beds: 1,
      price: .1, imgSrc: '/media/hotel1.jpg'},
    {name: 'Hotel #7', city: 'Memphis', beds: 2,
      price: .2, imgSrc: '/media/hotel1.jpg'},
    {name: 'Hotel #8', city: 'Memphis', beds: 2,
      price: .15, imgSrc: '/media/hotel1.jpg'},
    {name: 'Hotel #9', city: 'Memphis', beds: 1,
      price: .4, imgSrc: '/media/hotel1.jpg'},
    {name: 'Hotel #10', city: 'Memphis', beds: 2,
      price: .5, imgSrc: '/media/hotel1.jpg'},
    {name: 'Hotel #11', city: 'Memphis', beds: 1,
      price: .5, imgSrc: '/media/hotel1.jpg'},
]

class SearchResults extends Component {
    static propTypes = {
      hotelResultsArray: PropTypes.array,
      reservationData: PropTypes.func.isRequired,
    }
    constructor(props) {
        super(props)
        this.state = {
          query: this.props.searchQuery,
          listReady: false
        }
    }
    reserveClicked = (searchObject) => {
      // calculate total price
      let totalPrice = (this.props.searchQuery.end
        - this.props.searchQuery.start)
        * searchObject.price
      // TODO call web3.getReservationPrice() INSTEAD
      let resData = Object.assign(searchObject, { totalPrice: totalPrice })
      // TODO get hotel and RT data from DB
      this.props.reservationData(resData);
    }

    generateSearchResultList() {
      // let searchResultsList = null
      // if (searchResults !== null && searchResults !== undefined) {
        let searchResultsList = this.props.hotelResultsArray.map((dataObject, index) => {
          return <SearchResultsItem
            key={index}
            searchObject={dataObject}
            callback={this.reserveClicked}
          />
        })
      // }
      return searchResultsList
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
              { this.props.display === 'results' &&
                this.generateSearchResultList()
              }
              { this.props.display === 'loading' &&
                <div styleName="loading">Loading</div>
              }
            </div>
        )
    }
}

export default SearchResults
