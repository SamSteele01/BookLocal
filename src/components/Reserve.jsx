import React, { Component } from 'react';
import moment from 'moment';
// import getWeb3 from '../utils/getWeb3'
import Web3 from 'web3';

let reserve;
let RRAbi = require('../../ABIs/RoomRentingAbi.js');
// note: should switch between localAddress and rinkeyAddress based on web3 provider
let RRAddress = require('../../contractAddress/localAddress.js');
// let RRAddress = require('../../contractAddress/rinkebyAddress.js');
let web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:9545"));
let RR = web3.eth.contract(RRAbi).at(RRAddress);
// let web3 = window.web3

// stolen code zone vvv
// if (typeof web3 !== 'undefined') {
//   // Use Mist/MetaMask's provider
//   web3 = new Web3(window.web3.currentProvider);
//   console.log("first case");
// } else {
//   console.log('No web3? You should consider trying MetaMask!')
//     // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
//   web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:9545"));
// }
// stolen code zone ^^^


class Reserve extends Component{
  constructor(props){
    super(props)
    this.state = {
      // web3: null,
      // RR: null,
      tokenId : '',
      start: '05/17/2018',
      stop: '05/21/2018',
      accessCode: '',
      availability: ''
    }

    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleTextChange=this.handleTextChange.bind(this);
  }

  // componentWillMount() {
  //   // Get network provider and web3 instance.
  //   // See utils/getWeb3 for more info.
  
  //   getWeb3
  //   .then(results => {
  //     this.setState({
  //       web3: results.web3
  //     })
  
  //     // Instantiate contract once web3 provided.
  //     this.instantiateContract()
  //   })
  //   .catch(() => {
  //     console.log('Error finding web3.')
  //   })
  // }

  // componentDidUpdate(prevProps, prevState){
  //   if(prevState.RR!==this.state.RR)
  //     console.log(this.state.RR);
  // }

  // instantiateContract = () => {
  //   let web3 = this.state.web3;
  //   console.log('web3: ', web3);
    
  //   this.setState({
  //     RR: web3.eth.contract(RRAbi).at(RRAddress)
  //   })
  //   // RoomRenting.deployed().then(function(res){RR = RoomRenting.at(res.address)})
  // }

  handleTextChange = (event) => {
    if(this.state[event.target.id] !== undefined){
      this.setState({[event.target.id]: event.target.value});
    }
  }

  dateConverter = (mmddyyyy) => {
    return Math.floor(moment(mmddyyyy).unix() / 86400);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // let web3 = this.state.web3;
    console.log(this.dateConverter(this.state.start));
    console.log(this.dateConverter(this.state.stop));
    console.log("Reserve fired!");
    // let debug1 = 
    console.log("("+web3.toBigNumber(this.state.tokenId)+","+web3.toBigNumber(this.dateConverter(this.state.start))+","+web3.toBigNumber(this.dateConverter(this.state.stop))+","+web3.fromAscii(this.state.accessCode, 32)+",{from: "+web3.eth.accounts[0]+", gas: 3000000})");
    reserve = RR.reserve(
      parseInt(this.state.tokenId),
      this.dateConverter(this.state.start),
      this.dateConverter(this.state.stop),
      web3.fromAscii(this.state.accessCode),
      {from: RRAddress, gas: 3000000},
      // {from: web3.eth.accounts[0], gas: 3000000},
      (err,res) => {
        if(err){
          console.log(
            'availability: "false" '+err
          );
          this.setState({
            availability: "Oops! Something went wrong :-("
          })
        }
        console.log(
          'availability: "true"'
        );
        console.log(res);
        this.setState({
          availability: "Success!"
        });
      }
    );
    console.log(reserve);
  }

  render(){

    const labelStyle={
    //   border: "2px solid #383838",
    //   borderTop: "2px solid red",
      backgroundColor: "white",
      padding: "10px 0px",
      display: "flex",
      alignItems: "center",
      color: "#777",
      textTransform:"uppercase"
    }
    const inputStyle={
        height: "35px",
        flexGrow: "1",
        marginLeft: "10px",
        paddingLeft: "10px",
        border: "1px solid #ccc",
        fontSize: "15px",
      }
      const inputButtonStyle={
          marginTop: '25px',
          // color: "#777",
          fontWeight: "900",
          backgroundColor: "rgb(60, 91, 190)",
          padding: '5px 15px',
          color: "white",
          textTransform: "uppercase"
      }
    return(
      <div className="reserve">
        <fieldset>
          <h1>Reserve Your Room</h1>
            <div style={labelStyle}>Room Id:
              <input id="tokenId" type="text" selected="true"style={inputStyle} onChange={this.handleTextChange} value={this.state.tokenId} />
            </div>
            <div style={labelStyle}> Check-in date:
              <input id="start" type="text" style={inputStyle} onChange={this.handleTextChange} value={this.state.start} />
            </div>
            <div style={labelStyle}> Check-out date:
              <input id="stop" type="text" style={inputStyle} onChange={this.handleTextChange} value={this.state.stop} />
            </div>
            <div style={labelStyle}> Access Code:
              <input id="accessCode" type="text" style={inputStyle} onChange={this.handleTextChange} value={this.state.accessCode} />
            </div>
            {/* <hr /> */}
            <input id="search" type="submit" style={inputButtonStyle} value="Reserve" onClick={this.handleSubmit} />
            {this.state.availability}
          {/* </label> */}
        </fieldset>
      </div>
    )
  }
}

export default Reserve
