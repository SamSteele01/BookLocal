import React, { Component } from 'react'
import PropTypes from 'prop-types'
import hotelABI from 'abis/hotelABI'
import Payment from 'components/Search/Payment/Payment'

export default class HotelContractWrapper extends Component {

  static propTypes = {
    // web3: PropTypes.object.isRequired,
    address: PropTypes.string.isRequired, // hotelAddress
  };

  constructor(props) {
    super(props);

    this.state = {
      contract: window.web3.eth.contract(hotelABI).at(this.props.address),
    }
  }

  render() {
    const { ...passThroughProps } = this.props
    return (
      <div>
        <Payment
          hotelContract={this.state.contract}
          {...passThroughProps}
        />
      </div>
    );
  }

}
