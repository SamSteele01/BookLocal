import React, { Component } from 'react';
import Web3 from 'web3';

let available;
let web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:9545"));

let RRAbi = require('../../ABIs/RoomRentingAbi.js');
let RRAddress = '0x345ca3e014aaf5dca488057592ee47305d9b3e10';
let RR = web3.eth.contract(RRAbi).at(RRAddress);


class CheckAvailable extends Component{
  constructor(props){
    super(props)
    this.state = {
      tokenId : '',
      time: '',
      availability: '',
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
    available = RR.checkAvailable(this.state.tokenId, this.state.time);
    console.log(available);
    this.setState({
      availability: available,
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
      <div className="check-available">
        <fieldset>
          <h1>Check availability</h1>
            <div style={labelStyle}>Room Id:
              <input id="tokenId" type="text" style={inputStyle} onChange={this.handleTextChange} value={this.state.tokenId} />
            </div>
            <div style={labelStyle}> Time: 
              <input id="time" type="text" style={inputStyle} onChange={this.handleTextChange} value={this.state.time} />
            </div>
            <input id="search" type="submit" value="Check Availability" style={inputButtonStyle} onClick={this.handleSubmit} />
            {this.state.availability}
        </fieldset>
      </div>
    )
  }
}

export default CheckAvailable
