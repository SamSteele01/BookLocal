import React, { Component } from 'react'
import SearchResultsItem from './SearchResultsItem'
import './SearchResults.css'

// minimum result object elements: 
// name, id, state/zip, price/night, beds, rating?, 
// extended view: ameneties, pool, etc.

const searchResults = [
    {name: 'Hotel #1', city: 'memphis', beds: 2, price: 2.2, imgSrc: '/media/hotel1.jpg'},
    {name: 'Hotel #2', city: 'memphis', beds: 2, price: 4, imgSrc: '/media/hotel1.jpg'},
    {name: 'Hotel #3', city: 'memphis', beds: 1, price: 1.5, imgSrc: '/media/hotel1.jpg'},
    {name: 'Hotel #4', city: 'memphis', beds: 2, price: 1, imgSrc: '/media/hotel1.jpg'},
    {name: 'Hotel #5', city: 'memphis', beds: 3, price: 10, imgSrc: '/media/hotel1.jpg'},
    {name: 'Hotel #6', city: 'memphis', beds: 1, price: 1.1, imgSrc: '/media/hotel1.jpg'},
    {name: 'Hotel #7', city: 'memphis', beds: 2, price: 2.2, imgSrc: '/media/hotel1.jpg'},
    {name: 'Hotel #8', city: 'memphis', beds: 2, price: 2.15, imgSrc: '/media/hotel1.jpg'},
    {name: 'Hotel #9', city: 'memphis', beds: 1, price: 4, imgSrc: '/media/hotel1.jpg'},
    {name: 'Hotel #10', city: 'memphis', beds: 2, price: 5.5, imgSrc: '/media/hotel1.jpg'},
    {name: 'Hotel #11', city: 'memphis', beds: 1, price: 0.5, imgSrc: '/media/hotel1.jpg'},
    
]

class SearchResults extends Component {
    constructor(props) {
        super(props)
        this.state = {
            query: this.props.searchQuery,
            listReady: false
        }
    }
    generateSearchResultList() {
        let searchResultsList = null
        if (searchResults !== null && searchResults !== undefined) {
          searchResultsList = searchResults.map((searchObject, index) => {
            return <SearchResultsItem
                key={index}
                searchObject={searchObject}
                callback={searchObject.name}
              />
          })
        }
        return searchResultsList
      }
    // call an update on the query value, if necessary?
    // getSearchQuery = () => {
    //    this.setState({query: this.props.results});
    // }
    render() {
        // take in the query info and also receive another object that has either a) the entire list
        // or b) the filtered result returned from GraphQL (requires function call / binding )
            // error if results = 0
        // map that list to a set of nested divs with each room/hotel result
        // include a reservation button
        // reservation button calls the existing Reserve component to confirm dates
        return(
            <div styleName="container">
            {this.props.searchRunning &&
                    this.generateSearchResultList()
                    
            }
            </div>
        )
    }
}

export default SearchResults