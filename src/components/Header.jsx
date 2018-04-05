import React, { Component } from 'react';
import { LinkContainer } from 'Link';
import Logo from 'images/logo.png';

class Header extends Component {

  render() {
    return (
      <div className="header">
        <nav>
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
            <LinkContainer to="/home" className="pure-menu-heading header-menu-link">Home</LinkContainer>
            <LinkContainer to="/about" className="pure-menu-heading header-menu-link">About</LinkContainer>
            <LinkContainer to="/register" className="pure-menu-heading header-menu-link">Register</LinkContainer>
          </div>
        </nav>
        <div className="header-spacer"></div>
      </div>
    );
  }

}

export default Header;
