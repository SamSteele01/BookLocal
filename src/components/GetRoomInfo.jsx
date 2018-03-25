import React, { Component } from 'react';
import Web3 from 'web3';

let getRoomInfo, owner, renter, minRentTime, numBeds;
let web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:9545"));

let RRAbi = require('../../ABIs/RoomRentingAbi.js');
let RRAddress = '0x345ca3e014aaf5dca488057592ee47305d9b3e10';
let RR = web3.eth.contract(RRAbi).at(RRAddress);

class GetRoomInfo extends Component{
  constructor(props){
    super(props)
    this.state = {
      roomId : '',
      owner: '',
      renter: '',
      minRentTime: '',
      numBeds: ''
    }

    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleTextChange=this.handleTextChange.bind(this);
  }

  handleTextChange = (event) => {
    if(this.state[event.target.id] !== undefined){
      this.setState({[event.target.id]: event.target.value});
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("CheckAvailable fired!");
    getRoomInfo = RR.getRoomInfo(this.state.roomId);
    console.log(getRoomInfo);
    owner = String(getRoomInfo[0]).split(',');
    renter = String(getRoomInfo[1]).split(',');
    minRentTime = String(getRoomInfo[2]).split(',');
    numBeds = String(getRoomInfo[3]).split(',');
    this.setState({
      owner: owner,
      renter: renter,
      minRentTime: minRentTime,
      numBeds: numBeds
    });
  }

  render(){
    const labelStyle={
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
      fontWeight: "900",
      backgroundColor: "rgb(27, 117, 187)",
      padding: '5px 15px',
      color: "white",
      textTransform: "uppercase"
    }
    return(
      <div className="get-room-info">
        <fieldset >
          <h1>Room Details</h1>
          <div style={labelStyle}>Room ID:
            <input id="roomId" type="text" style={inputStyle} onChange={this.handleTextChange} value={this.state.tokenId} />
          </div>
          <input id="search" type="submit" value="Get Room Info" style={inputButtonStyle} onClick={this.handleSubmit} />
          <p style={labelStyle}>Owner: {this.state.owner}</p>
          <p style={labelStyle}>Renter: {this.state.renter}</p>
          <p style={labelStyle}>Minimum Rent Time: {this.state.minRentTime}</p>
          <p style={labelStyle}>Number of Beds: {this.state.numBeds}</p>
        </fieldset>
      </div>
    )
  }
}

export default GetRoomInfo
