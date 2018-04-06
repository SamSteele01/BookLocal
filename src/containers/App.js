import React, { Component } from 'react'
import {Router, Route} from 'react-router-dom';
import RegisterMessage from 'components/RegisterMessage'
import Reserve from 'components/Reserve';
// import GetReservations from 'components/GetReservations';
// import GetNextReservation from 'components/GetNextReservation';
// import CheckAvailable from 'components/CheckAvailable';
// import GetRoomInfo from 'components/GetRoomInfo';
import Access from 'components/Access';
import Settle from 'components/Settle';
import Status from 'containers/Status'
import Contact from 'components/Contact'
import Prospectus from 'containers/Prospectus';
import getWeb3 from 'utils/getWeb3';
// import Web3 from 'web3';  // from node module

import 'styles/App.css'

let RRAbi = require('../../ABIs/RoomRentingAbi.js');
// note: should switch between localAddress and rinkeyAddress based on web3 provider
// let RRAddress = require('contractAddress/localAddress.js');
let RRAddress = require('../../contractAddress/rinkebyAddress.js');

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      web3: null,
      RR: null,
      web3error: null,
      tokenId : null,
      checkInDate: null,
      checkOutDate: null
    }
    this.returnComponentState=this.returnComponentState.bind(this);
    // this.handleTextChange=this.handleTextChange.bind(this);
  }

  componentWillMount() {
    /** Get network provider and web3 instance.
     See utils/getWeb3 for more info. */
    getWeb3
    .then(results => {
      console.log('results: ', results);
      this.setState({
        web3: results.web3
      })
    })
    .catch(error => {
      console.log(error)
      this.setState({
        web3error: error.error
      })
    })
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.web3!==this.state.web3) {
      console.log(this.state.web3);
      this.instantiateContract();
    }
    if(prevState.RR!==this.state.RR) {
      console.log(this.state.RR);
    }
  }

  instantiateContract = () => {    
    this.setState({
      RR: this.state.web3.eth.contract(RRAbi).at(RRAddress)
    })
    // RoomRenting.deployed().then(function(res){RR = RoomRenting.at(res.address)})
  }

  returnComponentState = (componentState) => {
    this.setState({
      tokenId: componentState.tokenId,
      checkInDate: componentState.checkInDate,
      checkOutDate: componentState.checkOutDate
    })
  }

  render() {

    return (
      <div>
        <Router history={this.props.history}>
          <div>
            <Route path="/home" component={RegisterMessage} />
            <Route path="/register" render={(props)=>(<Reserve web3={this.state.web3} RR={this.state.RR} web3error={this.state.web3error} />)} />
            <Route path="/checkIn" render={(props)=>(<Access web3={this.state.web3} RR={this.state.RR} tokenId={this.state.tokenId} />)} />
            <Route path="/checkOut" render={(props)=>(<Settle web3={this.state.web3} RR={this.state.RR} tokenId={this.state.tokenId} />)} />
            <Route path="/status" render={(props)=>(<Status web3={this.state.web3} RR={this.state.RR} returnComponentState={this.returnComponentState} checkInDate={this.state.checkInDate} checkOutDate={this.state.checkOutDate} />)} />
            <Route path="/about" component={Prospectus} />
            <Route path="/contact" component={Contact} />
            <Route exact path="/" component={RegisterMessage} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App
