import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

let getReservations;

class GetReservations extends Component{
  constructor(props){
    super(props)
    this.state = {
        tokenId : this.props.tokenId,
        checkInDate: moment(this.props.checkInDate, "MM/DD/YYYY"),
        checkOutDate: moment(this.props.checkOutDate, "MM/DD/YYYY"),
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

  displayAddresses(addressArray){
    if(addressArray!=null){
      let addressInputs = addressArray.map((address, index) =>{
        return( <input key={index} id={`renterAddress${index}`} type="text" className="input-style input-style-2" value={address} readOnly/>)
      })
      return(
        <div className="array-mappings">
          <div className="label-style">Renter Address Mappings: </div> 
          {addressInputs}
        </div>
      )
    }else{
      return null;
    }
  }

  render(){
    return(
      <div className="get-reservations">
        <fieldset >
          <h1>Get Reservations</h1>
          {/* <p>For checking on </p> */}
            <div className="label-style">Token Id: 
                <input id="tokenId" type="text" className="input-style" onChange={this.handleTextChange} value={this.state.tokenId} />
            </div> 
            <div className="label-style">Check In Date:        
                <DatePicker
                  selected={this.state.checkInDate}
                  onChange={this.handleStartChange}
                  selectsStart
                  readOnly
                  startDate={this.state.checkInDate}
                  endDate={this.state.checkOutDate}
                  // minDate={moment([2018, 4, 17])}
                  maxDate={this.state.stop}
                  placeholderText="Select an arrival date"
                />
            </div>
            <div className="label-style">Check Out Date:             
                <DatePicker
                  selected={this.state.checkOutDate}
                  onChange={this.handleStopChange}
                  selectsEnd
                  readOnly
                  startDate={this.state.checkInDate}
                  endDate={this.state.checkOutDate}
                  minDate={this.state.start}
                  // maxDate={moment([2018, 4, 21])}
                  placeholderText="Select an departure date"
                />
            </div>
            <input id="search" type="submit" value="Get Address Mappings" className="input-button-style" onClick={this.handleSubmit} />
          {this.displayAddresses(this.state.return)}
        </fieldset>
      </div>
    )
  }
}
GetReservations.propTypes = {
  web3: PropTypes.object,
  RR: PropTypes.object,
  tokenId: PropTypes.number, //?
  checkInDate: PropTypes.string, //?
  checkOutDate: PropTypes.string
}

export default GetReservations
