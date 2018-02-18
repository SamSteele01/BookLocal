import React, { Component } from 'react';
// import BlueWeb from '../images/blue-web';

class Hero extends Component {

  render() {

    const {
      image,
      heroText
    } = this.props

    return (
      <div className={`hero-img ${image}`}>
        {/* <p className="hero-text">{this.props.heroText}</p> */}
        <h5 className="hero-text">BookLocal is designed to remove middlemen from the hotel ecosystem and serve as the single point of contact. Successful implementation allows for three key benefits: simplified user experiences; lower room prices for the traveler; and higher profits for the hotel.</h5>
      </div>
    );
  }
}

export default Hero;
