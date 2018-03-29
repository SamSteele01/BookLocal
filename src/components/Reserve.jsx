import React, { Component } from 'react';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

let reserve;

class Reserve extends Component{
  constructor(props){
    super(props)
    this.state = {
      start: moment([2018, 4, 17]), // preset for EthMemphis
      stop: moment([2018, 4, 21]), // preset for EthMemphis
      tokenId : null,
      account: null,
      availability: '',
      response: null
    }

    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleStartChange=this.handleStartChange.bind(this);
    this.handleStopChange = this.handleStopChange.bind(this);
  }

  // handleTextChange = (event) => {
  //   if(this.state[event.target.id] !== undefined){
  //     this.setState({[event.target.id]: event.target.value});
  //   }
  // }

  handleStartChange(date) {
    this.setState({
      start: date
    });
  }

  handleStopChange(date) {
    this.setState({
      stop: date
    });
  }

  dateConverter = (mmddyyyy) => {
    return Math.floor(moment(mmddyyyy).unix() / 86400);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let web3 = this.props.web3;
    console.log(this.dateConverter(this.state.start));
    console.log(this.dateConverter(this.state.stop));
    console.log("Reserve fired!");
    console.log("("+
    web3.toBigNumber(this.dateConverter(this.state.start))+","+
    web3.toBigNumber(this.dateConverter(this.state.stop))+","+
    ",{from: "+web3.eth.accounts[0]+", gas: 3000000})");
    reserve = this.props.RR.reserve(
      this.dateConverter(this.state.start),
      this.dateConverter(this.state.stop),
      {from: web3.eth.accounts[0], gas: 3000000},
      (err,res) => {
        if(err){
          console.log(
            'availability: "false" '+err
          );
          this.setState({
            availability: `Oops! Something went wrong ${err}`
          })
        }
        console.log(
          'availability: "true"'
        );
        console.log(res);
        this.setState({
          response: res, //txn
          account: web3.eth.accounts[0]
        });
      }
    );
    console.log(reserve);
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

    console.log(Math.floor(moment(this.state.start).unix() / 86400));
    return(
      <div className="reserve">
        { this.state.response ?
          <div>
            <h1>Room Reserved!</h1>
            <p>Thank you for booking your room with BookLocal! We can't wait to meet you at EthMemphis.</p>
            <div>The address that you used to book is: {this.state.account}</div>
            <div className="reserve-warning">See the transaction on <a href={`https://rinkeby.etherscan.io/tx/${this.state.response}`} target="_blank" rel="noopener noreferrer">Etherscan.io.</a></div>
          </div>
          :
          <fieldset>
            <h1>Reserve Your Room</h1>
            {this.props.web3error && <div 
            className="reserve-warning">
            {this.props.web3error}</div>}
              <div style={labelStyle}> Check-in date:
                <DatePicker
                  selected={this.state.start}
                  onChange={this.handleStartChange}
                  selectsStart
                  startDate={this.state.start}
                  endDate={this.state.stop}
                  minDate={moment([2018, 4, 17])}
                  maxDate={this.state.stop}
                  placeholderText="Select an arrival date"
                  style={inputStyle}
                />
                {/* <input id="start" type="text" style={inputStyle} onChange={this.handleTextChange} value={this.state.start} /> */}
              </div>
              <div style={labelStyle}> Check-out date:
                <DatePicker
                  selected={this.state.stop}
                  onChange={this.handleStopChange}
                  selectsEnd
                  startDate={this.state.start}
                  endDate={this.state.stop}
                  minDate={this.state.start}
                  maxDate={moment([2018, 4, 21])}
                  placeholderText="Select an departure date"
                  style={inputStyle}
                />
                {/* <input id="stop" type="text" style={inputStyle} onChange={this.handleTextChange} value={this.state.stop} /> */}
              </div>
              <input id="search" type="submit" style={inputButtonStyle} value="Reserve" onClick={this.handleSubmit} />
              {this.state.availability && <div className="reserve-warning">{this.state.availability}</div>
            }
          </fieldset>
        }
      </div>
    )
  }
}

export default Reserve
