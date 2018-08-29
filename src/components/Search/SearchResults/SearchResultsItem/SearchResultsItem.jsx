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
                <h4>{searchObject.hotelProfile.name}</h4>
            </div>
            <div styleName="hotelImage" data-image={searchObject.imgSrc}>
                <img src={searchObject.hotelProfile.imgSrc}
                  alt={searchObject.name}
                />
            </div>
            <div styleName="hotelLocation">
                City: <span>{searchObject.hotelProfile.city}</span>
            </div>
            <div styleName="hotelBeds">
                Beds: {searchObject.roomTypes.beds}
            </div>
            <div styleName="hotelPrice">
                Price/night: {searchObject.roomTypes.price} Eth
            </div>
            {callback &&
                <input
                    id="reserveRoom"
                    type="submit"
                    className="button"
                    styleName="reserveRoomButton"
                    value="Reserve"
                    onClick={event => callback(searchObject)}
                />
            }
        </div>
    )
}
