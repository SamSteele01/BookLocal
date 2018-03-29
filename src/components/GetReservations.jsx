import React, { Component } from 'react';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

let getReservations;

class GetReservations extends Component{
  constructor(props){
    super(props)
    this.state = {
        tokenId : this.props.tokenId,
        checkInDate: this.props.checkInDate,
        checkOutDate: this.props.checkOutDate,
        return: null // renter address
    }
    this.handleSubmit=this.handleSubmit.bind(this);
  }

  handleTextChange = (event) => {
    if(this.state[event.target.id] !== undefined){
      this.setState({[event.target.id]: event.target.value});
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("getReservations fired!");
    getReservations = this.props.RR.getReservations(this.state.tokenId, this.state.checkInDate, this.state.checkOutDate,
      (err,res) => {
        if(err){
          console.log(
            'Error getting reservation '+err
          );
        }
        console.log('res: ', res);
        this.setState({
            return: res[0]
        });
      }
    );
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
      <div className="get-reservations">
        <fieldset >
          <h1>Get Reservations</h1>
          {/* <p>For checking on </p> */}
            <div style={labelStyle}>Token Id: 
                <input id="tokenId" type="text" style={inputStyle} onChange={this.handleTextChange} value={this.state.tokenId} />
            </div> 
            <div style={labelStyle}>Check In Date:
                <input id="checkInDate" type="text" style={inputStyle} onChange={this.handleTextChange} value={this.state.checkInDate} />
            </div>
            <div style={labelStyle}>Check Out Date:
                <input id="checkOutDate" type="text" style={inputStyle} onChange={this.handleTextChange} value={this.state.checkOutDate} />
            </div>
            <input id="search" type="submit" value="Get Token" style={inputButtonStyle} onClick={this.handleSubmit} />
          {this.state.return &&
            <div style={labelStyle}>Renter Address: 
                <input id="renterAddress" type="text" style={inputStyle} value={this.state.return} readOnly/>
            </div> 
          }
        </fieldset>
      </div>
    )
  }
}

export default GetReservations
