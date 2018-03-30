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
        checkInDate: moment(this.props.checkInDate),
        checkOutDate: moment(this.props.checkOutDate),
        return: null // renter address array
    }
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleStartChange=this.handleStartChange.bind(this);
    this.handleStopChange=this.handleStopChange.bind(this);
  }

  handleTextChange = (event) => {
    if(this.state[event.target.id] !== undefined){
      this.setState({[event.target.id]: event.target.value});
    }
  }

  handleStartChange(date) {
    this.setState({
      checkInDate: date
    });
  }

  handleStopChange(date) {
    this.setState({
      checkOutDate: date
    });
  }

  dateConverter = (mmddyyyy) => {
    return Math.floor(moment(mmddyyyy).unix() / 86400);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("getReservations fired!");
    getReservations = this.props.RR.getReservations(
      this.state.tokenId,
      this.dateConverter(this.state.checkInDate),
      this.dateConverter(this.state.checkOutDate),
      (err,res) => {
        if(err){
          console.log(
            'Error getting reservation '+err
          );
        }
        console.log('res: ', res);
        this.setState({
            return: res
        });
      }
    );
  }

  displayAddresses(addressArray, inputStyle, inputStyle2, labelStyle){
    if(addressArray!=null){
      let addressInputs = addressArray.map((address, index) =>{
        return( <input key={index} id="renterAddress" type="text" style={Object.assign({}, inputStyle, inputStyle2)} value={address} readOnly/>)
      })
      return(
        <div>
          <div classname="label-style">Renter Address Mappings: 
          </div> 
          {addressInputs}
        </div>
      )
    }else{
      return null;
    }
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
    const inputStyle2={
      width: "90%",
      marginLeft: "0",
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
            <div classname="label-style">Token Id: 
                <input id="tokenId" type="text" style={inputStyle} onChange={this.handleTextChange} value={this.state.tokenId} />
            </div> 
            <div classname="label-style">Check In Date:
                <input id="checkInDate" type="text" style={inputStyle} onChange={this.handleTextChange} value={this.state.checkInDate} />
                <DatePicker
                  selected={this.state.checkInDate}
                  onChange={this.handleStartChange}
                  selectsStart
                  startDate={this.state.checkInDate}
                  endDate={this.state.checkOutDate}
                  // minDate={moment([2018, 4, 17])}
                  // maxDate={this.state.stop}
                  placeholderText="Select an arrival date"
                  // style={inputStyle}
                />
            </div>
            <div classname="label-style">Check Out Date:
                <input id="checkOutDate" type="text" style={inputStyle} onChange={this.handleTextChange} value={this.state.checkOutDate} />
                <DatePicker
                  selected={this.state.checkOutDate}
                  onChange={this.handleStopChange}
                  selectsEnd
                  startDate={this.state.checkInDate}
                  endDate={this.state.checkOutDate}
                  // minDate={this.state.start}
                  // maxDate={moment([2018, 4, 21])}
                  placeholderText="Select an departure date"
                  // style={inputStyle}
                />
            </div>
            <input id="search" type="submit" value="Get Address Mappings" style={inputButtonStyle} onClick={this.handleSubmit} />
          {this.displayAddresses(this.state.return, inputStyle, inputStyle2, labelStyle)}
        </fieldset>
      </div>
    )
  }
}

export default GetReservations
