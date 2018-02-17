import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {

  render() {
    return (
      <div>
        <header className="App-header">
          {/* add links to navigate */}
          <nav className="navbar pure-menu pure-menu-horizontal">
          <Link to="/home" className="pure-menu-heading pure-menu-link">Home</Link>
          <Link to="/about" className="pure-menu-heading pure-menu-link">About</Link>
          <Link to="/register" className="pure-menu-heading pure-menu-link">Register</Link>
        
          </nav>
        </header>
      </div>
    );
  }

}

export default Header;
