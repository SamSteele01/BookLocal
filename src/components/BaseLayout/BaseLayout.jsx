import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer';

export default class BaseLayout extends Component {
/** Need to call web3 utils and dispatch action
 * getWeb3, networkListener
 */
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
