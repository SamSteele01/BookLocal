import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo5 from '../images/logo5.png';

class Header extends Component {

  render() {
    return (
      <div>
        <nav>
          <div className="Logo">
            <Link to="/home">
              <img
                src={Logo5}
                alt="BookLocal Logo"
                // srcSet="http://booklocal.in/wp-content/uploads/2017/07/logo5.png 320w, http://booklocal.in/wp-content/uploads/2017/07/logo5-768x316.png 768w"
              />
            </Link>

          </div>
          <div className="nav-items">
            <Link to="/home" className="pure-menu-heading pure-menu-link">Home</Link>
            <Link to="/about" className="pure-menu-heading pure-menu-link">About</Link>
            <Link to="/register" className="pure-menu-heading pure-menu-link">Register</Link>
          </div>
        </nav>
      </div>
    );
  }

}

export default Header;
