import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Home from 'wrappers/Home'
import { ethMemStart, ethMemStop, responseTxn } from 'actions/dataActions'

let reserve;

class Reserve extends Component{
  constructor(props){
    super(props)
    this.state = {
      // start: store.getState().data.ethMemStart,
      // stop: store.getState().data.ethMemStops,
      // tokenId : null,
      // account: null,
      availability: '',
      response: null
    }
    // const { dispatch } = this.props;

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
    // this.setState({
    //   start: date
    // });
    this.props.dispatch(ethMemStart(date));
  }

  handleStopChange(date) {
    // this.setState({
    //   stop: date
    // });
    this.props.dispatch(ethMemStop(date));
  }

  dateConverter = (mmddyyyy) => {
    return Math.floor(moment(mmddyyyy).unix() / 86400);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let web3 = this.props.web3;
    console.log(this.dateConverter(this.props.start));
    console.log(this.dateConverter(this.props.stop));
    console.log("Reserve fired!");
    console.log("("+
    web3.toBigNumber(this.dateConverter(this.props.start))+","+
    web3.toBigNumber(this.dateConverter(this.props.stop))+","+
    "{from: "+web3.eth.accounts[0]+", gas: 3000000})");
    reserve = this.props.RR.reserve(
      this.dateConverter(this.props.start),
      this.dateConverter(this.props.stop),
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
        // this.setState({
        //   response: res, //txn
        //   account: web3.eth.accounts[0]
        // });
        this.props.dispatch(responseTxn(res));

      }
    );
    console.log(reserve);
  }

  /** Add input for hotel. Auto set to Exchange Building */
  render(){
    return(
      <Home>
        <div className="reserve">
          { this.props.response ?
            <div className="label-style">
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
                <div className="label-style"> Check-in date:
                  <DatePicker
                    selected={this.props.start}
                    onChange={this.handleStartChange}
                    selectsStart
                    readOnly
                    startDate={this.props.start}
                    endDate={this.props.stop}
                    // minDate={moment([2018, 4, 17])}
                    maxDate={this.props.stop}
                    placeholderText="Select an arrival date"
                  />
                  {/* <input id="start" type="text" className="input-style" onChange={this.handleTextChange} value={this.state.start} /> */}
                </div>
                <div className="label-style"> Check-out date:
                  <DatePicker
                    selected={this.props.stop}
                    onChange={this.handleStopChange}
                    selectsEnd
                    readOnly
                    startDate={this.props.start}
                    endDate={this.props.stop}
                    minDate={this.props.start}
                    // maxDate={moment([2018, 4, 21])}
                    placeholderText="Select an departure date"
                  />
                  {/* <input id="stop" type="text" className="input-style" onChange={this.handleTextChange} value={this.state.stop} /> */}
                </div>
                <input id="search" type="submit" className="input-button-style" value="Reserve" onClick={this.handleSubmit} />
                {this.state.availability && <div className="reserve-warning">{this.state.availability}</div>
              }
            </fieldset>
          }
        </div>
      </Home>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    start: state.data.ethMemStart,
    stop: state.data.ethMemStop,
    responseTxn: state.data.responseTxn
  };
};

/* code change */
// const mapDispatchToProps = () => {
//   return {
//     addItem: addItem
//   };
// };

export default connect(mapStateToProps)(Reserve)
