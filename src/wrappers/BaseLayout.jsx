import React, {Component} from 'react';
import Header from 'components/Header.jsx';
import Footer from 'components/Footer.jsx';
// import 'styles/index.css';

export default class BaseLayout extends Component {
/** Need to call web3 utils and dispatch action
 * getWeb3, networkListener
 */
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