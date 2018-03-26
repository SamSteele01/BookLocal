import React, { Component } from 'react';

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
  }

  handleTextChange = (event) => {
    if(this.state[event.target.id] !== undefined){
      this.setState({[event.target.id]: event.target.value});
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
          owner: res[0],
          renter: res[1],
          minRentTime: res[2].c[0],
          roomNumber: res[3].c[0],
          numBeds: res[4].c[0]
        });
      }
    );
  }

  render(){
    const labelStyle={
      backgroundColor: "white",
      marginTop: "1.5rem",
      marginBottom: "0",
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
          <div style={labelStyle}>Token ID:
            <input id="roomId" type="text" style={inputStyle} onChange={this.handleTextChange} value={this.state.tokenId} />
          </div>
          <input id="search" type="submit" value="Get Room Info" style={inputButtonStyle} onClick={this.handleSubmit} />
          <p style={labelStyle}>Owner: {this.state.owner}</p>
          <p style={labelStyle}>Renter: {this.state.renter}</p>
          <p style={labelStyle}>Minimum Rent Time:   {this.state.minRentTime}</p>
          <p style={labelStyle}>Room Number:         {this.state.roomNumber}</p>
          <p style={labelStyle}>Number of Beds:      {this.state.numBeds}</p>
        </fieldset>
      </div>
    )
  }
}

export default GetRoomInfo
