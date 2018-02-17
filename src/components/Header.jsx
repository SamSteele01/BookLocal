import React, { Component } from 'react';
import Logo5 from '../images/logo5.png';

class Header extends Component {

  render() {
    return (
      <div>
        <header className="App-header">
          {/* contact dropdown */}
          <img
            src={Logo5}
            alt="Book Local"
            class="logo"
            // srcSet="http://booklocal.in/wp-content/uploads/2017/07/logo5.png 320w, http://booklocal.in/wp-content/uploads/2017/07/logo5-768x316.png 768w"
          />
        </header>
      </div>
    );
  }

}

export default Header;
