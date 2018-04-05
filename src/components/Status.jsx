import React, { Component } from 'react'
import BrickWall from 'wrappers/BrickWall';
import GetNextReservation from 'components/GetNextReservation';
import GetRoomInfo from 'components/GetRoomInfo';
import GetReservations from 'components/GetReservations';

export default class Status extends Component {
  render() {
    return (
        <BrickWall>
            <GetNextReservation />
            <GetRoomInfo />
            <GetReservations />
        </BrickWall>
    )
  }
}
