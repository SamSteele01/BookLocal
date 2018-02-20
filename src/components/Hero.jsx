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
        <p>{heroText}</p>
      </div>
    );
  }
}

export default Hero;
