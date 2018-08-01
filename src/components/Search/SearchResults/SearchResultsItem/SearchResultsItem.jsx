import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './SearchResultsItem.css'

SearchResultsItem.propTypes = {
    props: PropTypes.object,
    onClick: PropTypes.func
}
// TODO: Add icons or other identifying styling
export default function SearchResultsItem({searchObject, callback}) {
    return(
        <div styleName="container">
            <div styleName="hotelName">
                <h4>{searchObject.name}</h4>
            </div>
            <div styleName="hotelImage" data-image={searchObject.imgSrc}>
                <img src={searchObject.imgSrc} />
            </div>
            <div styleName="hotelLocation">
                City: <span>{searchObject.city}</span>
            </div>
            <div styleName="hotelBeds">
                Beds: {searchObject.beds}
            </div>
            <div styleName="hotelPrice">
                Price: {searchObject.price}
            </div>
            {callback && 
                <input
                    id="reserveRoom"
                    type="submit"
                    className="button"
                    styleName="reserveRoomButton"
                    value="Reserve"
                    onClick={event => callback(searchObject.name)}
                />
            }
        </div>
    )
}