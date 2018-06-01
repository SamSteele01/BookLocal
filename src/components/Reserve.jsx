import React, { Component } from 'react';
import moment from 'moment/moment';
import DatePicker from 'react-datepicker';
import { PulseLoader } from 'react-spinners';
import 'react-datepicker/dist/react-datepicker.css';
import Home from 'wrappers/Home'

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
      displayResponse: false,
      blockNum: null,
      response: null,
      status: null
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
    // console.log(this.dateConverter(this.state.start));
    // console.log(this.dateConverter(this.state.stop));
    // console.log("Reserve fired!");
    // console.log("("+
    // web3.toBigNumber(this.dateConverter(this.state.start))+","+
    // web3.toBigNumber(this.dateConverter(this.state.stop))+","+
    // "{from: "+web3.eth.accounts[0]+", gas: 3000000})");
    reserve = this.props.RR.reserve(
      this.dateConverter(this.state.start),
      this.dateConverter(this.state.stop),
      {from: web3.eth.accounts[0], gas: 3000000},
      (err,res) => {
        if(err){console.log('availability: "false" '+err);
          this.setState({availability: `Oops! Something went wrong ${err}`})}
        if(!err){
          // console.log('availability: "true"');
          // console.log(res);
          this.setState({
            response: res, // switch to response page
            account: web3.eth.accounts[0]})
          // console.log(this.transaction(res)) // undefined
          this.setTxnListener(res)
        }
      }
    );
    console.log(reserve);
  }

  setTxnListener = (txn) => {
    // this.setState({response: null})
    // let getTxn
    let listener = setInterval( () => {
      this.transaction(txn)
      // console.log('getTxn: ', getTxn);
      if (this.state.blockNum !== null) {
        // this.setState({response: getTxn})
        this.getTxnReceipt(txn)
        clearInterval(listener)
      }
    }, 2000)
  }

  transaction = (txn) => {
    // let blockNum = null
    this.props.web3.eth.getTransaction(txn, (error, result) => {
      if(!error) {
        // console.log(JSON.stringify(result));
        // console.log('result: ', result);
        // blockNum = result.blockNumber // null until mined
        this.setState({blockNum: result.blockNumber})
        // console.log('blockNum: ', blockNum);
      }else{
        console.error(error);
        console.log(result);
      }
    })
    // return (blockNum) // doesn't work
  }

  getTxnReceipt = (txn) => {
    // let status = null
    this.props.web3.eth.getTransactionReceipt(txn, (error, result) => {
      if(!error) {
        // console.log(JSON.stringify(result));
        // console.log('result: ', result);
        // status = result.status // '0x0' = fail '0x1' = success
        // console.log('status: ', status);
        this.setState({status: result.status})
      }else{
        console.error(error);
        console.log(result);
      }
    })
  }

  render(){
    return(
      <div className="home darken">
        <div className="reserve">
          { this.state.response ?
            <div >
              <fieldset>
                { (this.state.blockNum && this.state.status!==null) ?
                  <div>
                    {this.state.status==="0x1" ?
                      <div>
                        <h1>Room Reserved!</h1>
                        <div>Thank you for booking your room with BookLocal! We can't wait to meet you at EthMemphis.</div>
                      </div> :
                      <div className="reserve-warning">There was a problem and the reservation failed. You should contact ____</div>
                    }
                  </div> :
                  // spinner
                <div>
                  <PulseLoader color='#E66E1C' loading={true} />
                  <div>Please wait while the transaction gets mined. This could take a minute or two.</div>
                </div>
                }

                <p>The address that you used to book is: {this.state.account}</p>
                <div className="reserve-warning">See the transaction on <a href={`https://rinkeby.etherscan.io/tx/${this.state.response}`} target="_blank" rel="noopener noreferrer">Etherscan.io.</a></div>
              </fieldset>
            </div>
            :
            <fieldset>
              <h1>Reserve Your Room</h1>
              {this.props.web3error &&
                <div className="reserve-warning">{this.props.web3error} To download MetaMask click <a href='https://metamask.io'>here</a>.</div>
              }
              {this.props.netIdError &&
                <div className="reserve-warning">{this.props.netIdError}</div>
              }
              <div className="label-style"> Hotel:
                <input id="Hotel" type="text" className="input-style" onChange={this.handleTextChange} value="The Exchange Building" readOnly />
              </div>
              <div className="label-style"> Check-in date:
                <DatePicker
                  selected={this.state.start}
                  onChange={this.handleStartChange}
                  selectsStart
                  readOnly
                  startDate={this.state.start}
                  endDate={this.state.stop}
                  // minDate={moment([2018, 4, 17])} // gray out dates before
                  maxDate={this.state.stop}
                  placeholderText="Select an arrival date"
                />
                {/* <input id="start" type="text" className="input-style" onChange={this.handleTextChange} value={this.state.start} /> */}
              </div>
              <div className="label-style"> Check-out date:
                <DatePicker
                  selected={this.state.stop}
                  onChange={this.handleStopChange}
                  selectsEnd
                  readOnly
                  startDate={this.state.start}
                  endDate={this.state.stop}
                  minDate={this.state.start}
                  // maxDate={moment([2018, 4, 21])} // gray out dated after
                  placeholderText="Select an departure date"
                />
                {/* <input id="stop" type="text" className="input-style" onChange={this.handleTextChange} value={this.state.stop} /> */}
              </div>
              <input id="search" type="submit" className="input-button-style" value="Reserve" onClick={this.handleSubmit} />
              {this.state.availability &&
                <div className="reserve-warning">{this.state.availability}</div>
              }
            </fieldset>
          }
        </div>
      </div>
    )
  }
}

export default Reserve
