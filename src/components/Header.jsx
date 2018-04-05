import React, { Component } from 'react';
import { LinkContainer } from 'Link';
import Logo from 'images/logo.png';

class Header extends Component {

  render() {
    return (
      <div className="header">
        <nav>
          <div className="nav-items">
            <LinkContainer to="/register" className="pure-menu-heading header-menu-link">Book</LinkContainer>
            <LinkContainer to="/checkIn" className="pure-menu-heading header-menu-link">Check In</LinkContainer>
            <LinkContainer to="/checkOut" className="pure-menu-heading header-menu-link">Check Out</LinkContainer>
          </div>
          <div className="Logo">
            <LinkContainer to="/home">
              <img
                src={Logo}
                alt="BookLocal Logo"
                // srcSet="http://booklocal.in/wp-content/uploads/2017/07/logo5.png 320w, http://booklocal.in/wp-content/uploads/2017/07/logo5-768x316.png 768w"
              />
            </LinkContainer>
          </div>
          <div className="nav-items">
            <LinkContainer to="/status" className="pure-menu-heading header-menu-link">Status</LinkContainer>
            <LinkContainer to="/about" className="pure-menu-heading header-menu-link">About</LinkContainer>
            <LinkContainer to="/contact" className="pure-menu-heading header-menu-link">Contact</LinkContainer>
          </div>
        </nav>
        <div className="header-spacer"></div>
      </div>
    );
  }

}

export default Header;
