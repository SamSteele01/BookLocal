import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from 'images/logo.png';
import SvgIcon from 'components/SvgIcon';
import Paths from 'icons/icons';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: window.innerWidth,
      displayMenu: false
    };

    this.setMedia = this.setMedia.bind(this)
    this.toggleDisplayMenu = this.toggleDisplayMenu.bind(this)
  }


  componentDidMount(){
    window.addEventListener("resize", this.setMedia);
  }

  componentWillUnmount(){
    window.removeEventListener("resize", this.setMedia);
  }

  setMedia() {
    this.setState({windowWidth: window.innerWidth});
  }

  toggleDisplayMenu(){
    this.setState({displayMenu: !this.state.displayMenu});
  }

  render() {
    return (
      <div className="header">
        {this.state.windowWidth>425 ?
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
          </nav> :
          <nav>
            <div className="Logo margin-left">
              <Link to="/home">
                <img
                  src={Logo}
                  alt="BookLocal Logo"
                  // srcSet="http://booklocal.in/wp-content/uploads/2017/07/logo5.png 320w, http://booklocal.in/wp-content/uploads/2017/07/logo5-768x316.png 768w"
                />
              </Link>
            </div>
            <div  onClick={this.toggleDisplayMenu} >
              {this.state.displayMenu ? 
                <div className="nav-drop-down">
                  <div className="nav-menu-button">
                    <SvgIcon icon={Paths.X.d} viewBox="0 0 384 512" size={32} /> 
                  </div>
                  <div className="nav-items">
                    <NavLink to="/register" activeClassName="link-active" className="pure-menu-heading">Book</NavLink>
                    <NavLink to="/checkIn" activeClassName="link-active" className="pure-menu-heading">Check In</NavLink>
                    <NavLink to="/checkOut" activeClassName="link-active" className="pure-menu-heading">Check Out</NavLink>
                    <NavLink to="/status" activeClassName="link-active" className="pure-menu-heading">Status</NavLink>
                    <NavLink to="/about" activeClassName="link-active" className="pure-menu-heading">About</NavLink>
                    <NavLink to="/contact" activeClassName="link-active" className="pure-menu-heading">Contact</NavLink>
                  </div>
                </div>      
                :
                <div className="nav-menu-button">
                  <SvgIcon icon={Paths.bars.d} viewBox="0 0 448 512" size={28} />
                </div>
              }
            </div>
          </nav>
        }
          {/* <div>
              {this.state.displayMenu && 
              }
          </div> */}
        <div className="header-spacer"></div>
      </div>
    );
  }

}

export default Header;
