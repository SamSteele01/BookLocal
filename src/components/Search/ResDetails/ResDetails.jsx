import React from 'react';
import PropTypes from 'prop-types';
import './resDetails.css'

export default function ResDetails(props) {
  return (
    <div styleName="reservationDetails">
        <div styleName="reservationDetails-header">
          <h4>Booking details</h4>
        </div>
        <p styleName="reservationDetails-hotelName">
          Room at {props.reservationData.name}
        </p>
        <p styleName="reservationDetails-beds">
          Beds: {props.reservationData.beds}
        </p>
        <p styleName="reservationDetails-price">
          Price: {props.price.toFixed(3)} ETH
        </p>
        <p styleName="reservationDetails-dates">
          Dates: {props.startDate} to {props.endDate}
        </p>
    </div>
  );
}

ResDetails.propTypes = {

};
