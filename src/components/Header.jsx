import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from 'images/logo.png';

class Header extends Component {

  render() {
    return (
      <div className="header">
        <nav>
          <div className="nav-items">
            <NavLink to="/register" activeClassName="link-active" className="pure-menu-heading">Book</NavLink>
            <NavLink to="/checkIn" activeClassName="link-active" className="pure-menu-heading">Check In</NavLink>
            <NavLink to="/checkOut" activeClassName="link-active" className="pure-menu-heading">Check Out</NavLink>
            
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
            <NavLink to="/status" activeClassName="link-active" className="pure-menu-heading">Status</NavLink>
            <NavLink to="/about" activeClassName="link-active" className="pure-menu-heading">About</NavLink>
            <NavLink to="/contact" activeClassName="link-active" className="pure-menu-heading">Contact</NavLink>
          </div>
        </nav>
        <div className="header-spacer"></div>
      </div>
    );
  }

}

export default Header;
