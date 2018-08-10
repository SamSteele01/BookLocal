import React, { Component } from 'react'
import PropTypes from 'prop-types'
import reservationABI from 'abis/reservationABI'
import Settle from 'components/Settle'

export default class ResContractWrapper extends Component {

  static propTypes = {
    // web3: PropTypes.object.isRequired,
    address: PropTypes.string.isRequired, // hotelAddress
  };

  constructor(props) {
    super(props);

    this.state = {
      contract: window.web3.eth.contract(reservationABI).at(this.props.address),
    }
  }

  render() {
    const { ...passThroughProps } = this.props
    return (
      <div>
        <Settle
          resContract={this.state.contract}
          {...passThroughProps}
        />
      </div>
    );
  }

}
