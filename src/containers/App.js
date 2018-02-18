import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import { HiddenOnlyAuth, VisibleOnlyAuth } from './util/wrappers.js'

// UI Components
// import LoginButtonContainer from './user/ui/loginbutton/LoginButtonContainer'
// import LogoutButtonContainer from './user/ui/logoutbutton/LogoutButtonContainer'
import Reserve from '../components/Reserve';

// Styles
// import '../styles/oswald.css'
// import '../styles/open-sans.css'
import '../styles/pure-min.css'
import '../styles/App.css'

class App extends Component {
  render() {
    // const OnlyAuthLinks = VisibleOnlyAuth(() =>
    //   <span>
    //     <li className="pure-menu-item">
    //       <Link to="/dashboard" className="pure-menu-link">Dashboard</Link>
    //     </li>
    //     <li className="pure-menu-item">
    //       <Link to="/profile" className="pure-menu-link">Profile</Link>
    //     </li>
    //     <LogoutButtonContainer />
    //   </span>
    // )

    // const OnlyGuestLinks = HiddenOnlyAuth(() =>
    //   <span>
    //     <LoginButtonContainer />
    //   </span>
    // )

    return (
      <div className="app">
        {/* <nav className="navbar pure-menu pure-menu-horizontal">
          <Link to="/" className="pure-menu-heading pure-menu-link">Truffle Box</Link>
          <ul className="pure-menu-list navbar-right">
            <OnlyGuestLinks />
            <OnlyAuthLinks />
          </ul>
        </nav> */}

        <Reserve/>
      </div>
    );
  }
}

export default App
