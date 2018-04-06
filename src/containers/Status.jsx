import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GetNextReservation from 'components/GetNextReservation';
import GetRoomInfo from 'components/GetRoomInfo';
import GetReservations from 'components/GetReservations';

export default class Status extends Component {
  render() {
    return (
        <div className="app">
            <GetNextReservation web3={this.props.web3} RR={this.props.RR} returnComponentprops={this.returnComponentState}/>
            <GetRoomInfo web3={this.props.web3} RR={this.props.RR} tokenId={this.props.tokenId}/>
            <GetReservations web3={this.props.web3} RR={this.props.RR} tokenId={this.props.tokenId} checkInDate={this.props.checkInDate} checkOutDate={this.props.checkOutDate} />
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