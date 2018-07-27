import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer';

export default class BaseLayout extends Component {

  render() {
    return (
      <div className="base-layout content-grid">
        <Header/>
            {this.props.children}
        <Footer/>
      </div>
    );
  }
}