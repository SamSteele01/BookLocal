import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GetNextReservation from 'components/GetNextReservation';
import GetRoomInfo from 'components/GetRoomInfo';
import GetReservations from 'components/GetReservations';

export default class Status extends Component {
  render() {
    return (
        <div className="app">
            <GetNextReservation web3={this.state.web3} RR={this.state.RR} returnComponentState={this.returnComponentState}/>
            <GetRoomInfo web3={this.state.web3} RR={this.state.RR} tokenId={this.state.tokenId}/>
            <GetReservations web3={this.state.web3} RR={this.state.RR} tokenId={this.state.tokenId} checkInDate={this.state.checkInDate} checkOutDate={this.state.checkOutDate} />
        </div>
    )
  }
}
Status.propTypes = {
    web3: PropTypes.object,
    RR: PropTypes.object,
    tokenId: PropTypes.string, //?
    returnComponentState: PropTypes.func,
    checkInDate: PropTypes.object, //?
    checkOutDate: PropTypes.object
}