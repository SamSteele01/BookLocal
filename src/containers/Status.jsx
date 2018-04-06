import React, { Component } from 'react'
import GetNextReservation from 'components/GetNextReservation';
import GetRoomInfo from 'components/GetRoomInfo';
import GetReservations from 'components/GetReservations';

export default class Status extends Component {
  render() {
    return (
        <div className="app">
            <GetNextReservation />
            <GetRoomInfo />
            <GetReservations />
        </div>
    )
  }
}