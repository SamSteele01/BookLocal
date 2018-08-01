import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GetNextReservation from 'components/GetNextReservation';
import GetRoomInfo from 'components/GetRoomInfo';
import GetReservations from 'components/GetReservations';
// import CheckAvailable from 'components/CheckAvailable';

export default class Status extends Component {
    constructor(props) {
        super(props)
        this.state ={
            tokenId: props.tokenId
        }
    }
    
    returnComponentState = (componentState) => {
        this.setState({
          tokenId: componentState.tokenId
        })
        this.props.returnComponentState(componentState)
      }

  render() {
    return (
        <div className="home darken margin-at-bottom">
            <GetNextReservation web3={this.props.web3} RR={this.props.RR} tokenId={this.state.tokenId} account={this.props.account} returnComponentState={this.returnComponentState} checkInDate={this.props.checkInDate} checkOutDate={this.props.checkOutDate} />
            {this.state.tokenId &&
                <div className="z-above-after">
                    <GetRoomInfo web3={this.props.web3} RR={this.props.RR} tokenId={this.props.tokenId}/>
                    <GetReservations web3={this.props.web3} RR={this.props.RR} tokenId={this.props.tokenId} checkInDate={this.props.checkInDate} checkOutDate={this.props.checkOutDate} />
                    {/* <CheckAvailable web3={this.props.web3} RR={this.props.RR} tokenId={this.props.tokenId} /> */}
                </div>
            }
        </div>
    )
  }
}
Status.propTypes = {
    web3: PropTypes.object,
    RR: PropTypes.object,
    // tokenId: PropTypes.number, //?
    returnComponentState: PropTypes.func,
    checkInDate: PropTypes.string, //?
    checkOutDate: PropTypes.string
}