import React, { Component } from 'react';
import PropTypes from 'prop-types';

let getRoomInfo;

class GetRoomInfo extends Component{
  constructor(props){
    super(props)
    this.state = {
      tokenId: this.props.tokenId,
      owner: '',
      renter: '',
      minRentTime: '',
      roomNumber: '',
      numBeds: ''
    }

    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleTextChange=this.handleTextChange.bind(this);
    this.convertUnixToDays=this.convertUnixToDays.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('prevState: ', prevState);
    console.log('nextProps: ', nextProps);

    if(nextProps.tokenId!==prevState.tokenId){
      return {tokenId: nextProps.tokenId}
    }else{
      return null
    }
  }

  handleTextChange = (event) => {
    if(this.state[event.target.id] !== undefined){
      this.setState({[event.target.id]: event.target.value});
    }
  }

  convertUnixToDays = (time) => {
    console.log('time: ', time);
    if(time===''){
      return ''
    }
    if(Math.floor(time/86400)===1){
      return time/86400 + " day"
    }
    else {
      return time/86400 + " days"
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("CheckAvailable fired!");
    getRoomInfo = this.props.RR.getRoomInfo(this.state.tokenId,
      (err,res) => {
        if(err){
          console.log(
            'Error getting room info: '+err
          );
        }
        console.log(res); 
        this.setState({
          owner: "The Exchange Building",
          renter: res[1],
          minRentTime: res[2].c[0],
          roomNumber: res[3].c[0],
          numBeds: res[4].c[0]
        });
      }
    );
  }

  /** Add inputs to display Hotel Name and Location. Auto fill - hard code */
  render(){
    return(
      <div className="get-room-info">
        <fieldset >
          <h1>Room Details</h1>
          <div className="label-style">Token ID:
            <input id="tokenId" type="text" className="input-style" onChange={this.handleTextChange} value={this.state.tokenId} />
          </div>
          <input id="search" type="submit" value="Get Room Info" className="input-button-style" onClick={this.handleSubmit} />
          
          <div className="label-style">Owner:
            <input id="owner" type="text" className="input-style" value={this.state.owner} readOnly/>
          
          </div>
          <div className="label-style">Current Renter:
            <input id="renter" type="text" className="input-style" value={this.state.renter} readOnly/>
          
          </div>
          <div className="label-style">Minimum Rent Time:
            <input id="minRentTime" type="text" className="input-style" value={this.convertUnixToDays(this.state.minRentTime)} readOnly/>
          
          </div>
          <div className="label-style">Room Number:
            <input id="roomNumber" type="text" className="input-style" value={this.state.roomNumber} readOnly/>
          
          </div>
          <div className="label-style">Number of Beds:
            <input id="numBeds" type="text" className="input-style" value={this.state.numBeds} readOnly/>
          
          </div>
        </fieldset>
      </div>
    )
  }
}
GetRoomInfo.propTypes = {
  web3: PropTypes.object,
  RR: PropTypes.object,
  tokenId: PropTypes.number, //?
}

export default GetRoomInfo
