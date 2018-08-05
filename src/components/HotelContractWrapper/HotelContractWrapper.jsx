import React, { Component } from 'react'
import PropTypes from 'prop-types'
import hotelABI from 'abis/hotelABI'
import Payment from 'components/Search/Payment/Payment'

export default class HotelContractWrapper extends Component {

  static propTypes = {
    web3: PropTypes.object.isRequired,
    address: PropTypes.string.isRequired, // hotelAddress
    // view: PropTypes.string // pass through
  };

  constructor(props) {
    super(props);

    this.state = {
      contract: props.web3.eth.contract(hotelABI).at(this.props.address),
    }
  }

  render() {
    const { ...passThroughProps } = this.props
    return (
      <div>
        <Payment
          // web3={this.props.web3}
          // address={this.state.hotelAddress}
          // view={this.props.view}
          hotelContract={this.state.contract}
          {...passThroughProps}
        />
      </div>
    );
  }

}
