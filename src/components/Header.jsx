import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from 'images/logo.png';

class Header extends Component {

  render() {
    return (
      <div className="header">
        <nav>
          <div className="nav-items">
            <Link to="/register" className="pure-menu-heading header-menu-link">Book</Link>
            <Link to="/checkIn" className="pure-menu-heading header-menu-link">Check In</Link>
            <Link to="/checkOut" className="pure-menu-heading header-menu-link">Check Out</Link>
          </div>
          <div className="Logo">
            <Link to="/home">
              <img
                src={Logo}
                alt="BookLocal Logo"
                // srcSet="http://booklocal.in/wp-content/uploads/2017/07/logo5.png 320w, http://booklocal.in/wp-content/uploads/2017/07/logo5-768x316.png 768w"
              />
            </Link>

          </div>
          <div className="nav-items">
            <Link to="/status" className="pure-menu-heading header-menu-link">Status</Link>
            <Link to="/about" className="pure-menu-heading header-menu-link">About</Link>
            <Link to="/contact" className="pure-menu-heading header-menu-link">Contact</Link>
          </div>
        </nav>
        <div className="header-spacer"></div>
      </div>
    );
  }

}

export default Header;
