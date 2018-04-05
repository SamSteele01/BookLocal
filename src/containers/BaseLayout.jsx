import React, {Component} from 'react';
import Header from 'components/Header.jsx';
import Footer from 'components/Footer.jsx';
// import 'styles/index.css';

export default class BaseLayout extends Component {

  render() {
    return (
      <div className="base-layout">
        <Header/>
            {this.props.children}
        <Footer/>
      </div>
    );
  }
}