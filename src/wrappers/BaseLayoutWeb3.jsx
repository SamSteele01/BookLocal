import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from 'components/Header.jsx';
import Footer from 'components/Footer.jsx';
import getWeb3 from 'utils/getWeb3';
import { setStore } from 'actions/dataActions';
// import 'styles/index.css';

class BaseLayout extends Component {
  constructor(props){
    super(props);

    const { dispatch } = props;
  }
/** Need to call web3 utils and dispatch action
 * getWeb3, networkListener
 */

 

  componentDidMount() {
  /** Get network provider and web3 instance.
   See utils/getWeb3 for more info. */
  //  let { dispatch } = this.props
    getWeb3
    .then(results => {
      console.log('results: ', results);
      // this.setState({
      //   web3: results.web3
      // })
      this.props.setStore("web3", results.web3)
    })
    .catch(error => {
      console.log(error)
      // this.setState({
      //   web3error: error.error
      // })
      this.props.setStore("web3error", error.error)
    })
  }

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

const mapStateToProps = (state) => {
  return {
    web3: state.data.web3,
    // stop: state.data.ethMemStop,
    // responseTxn: state.data.responseTxn
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(setStore, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BaseLayout)