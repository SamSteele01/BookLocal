import React, { Component } from 'react';
import { PulseLoader } from 'react-spinners';

let access;

class Access extends Component{
  constructor(props){
    super(props)
    this.state = {
      tokenId : this.props.tokenId,
      response: null,
      blockNum: null,
      status: null  // '0x0' = fail '0x1' = success
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
    console.log("Access fired!");
    access = this.props.RR.access(this.state.tokenId,
      {from: this.props.web3.eth.accounts[0], gas: 3000000},
      (err,res) => {
        if(err){
          console.log(
            'Error getting next reservation '+err
          );
        }
        console.log(res);
        this.setState({
          response: res
        });
        this.setTxnListener(res)
      }
    );
  }

  setTxnListener = (txn) => {
    let listener = setInterval( () => {
      this.transaction(txn)
      if (this.state.blockNum !== null) {
        this.getTxnReceipt(txn)
        clearInterval(listener)
      }
    }, 2000)
  }

  transaction = (txn) => {
    this.props.web3.eth.getTransaction(txn, (error, result) => {
      if(!error) {
        this.setState({blockNum: result.blockNumber})
      }else{
        console.error(error);
        console.log(result);
      }
    })
  }

  getTxnReceipt = (txn) => {
    this.props.web3.eth.getTransactionReceipt(txn, (error, result) => {
      if(!error) {
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
        <div className="access">
        <fieldset>
            { this.state.response ?
              <div>
                { (this.state.blockNum && this.state.status!==null) ? 
                  <div>
                    { this.state.status==="0x1" ?
                      <div>
                        <h1>Checked In!</h1>
                        <div>Please enjoy your stay!</div> 
                      </div> 
                    :
                      <div className="reserve-warning">There was a problem with checking in. Please contact Steve Lee: steven@booklocal.in</div>
                    }
                  </div> 
                :
                    // spinner
                  <div>
                    <PulseLoader color='#1b75bb' loading={true} />
                    <div>Please wait while the transaction gets mined. This could take a minute or two.</div>
                  </div>
                }
              </div>
            :
              <div>
                <h1>Check In</h1>
                <div className="label-style">Token Id:
                  <input id="tokenId" type="text" className="input-style" onChange={this.handleTextChange} value={this.state.tokenId} />
                </div>
                {this.props.account===null || this.props.account===undefined ?
                  <div>
                    <div className="reserve-warning">Please log in to MetaMask.</div>
                    <input id="search" type="submit" className="input-button-style disabled" value="Check In" onClick={this.handleSubmit} disabled/>
                  </div>
                :
                  <input id="search" type="submit" className="input-button-style" value="Check In" onClick={this.handleSubmit} />
                }
                {/* <input id="search" type="submit" value="Check In" className="input-button-style" onClick={this.handleSubmit} /> */}

              </div>
            }
          </fieldset>
        </div>
      </div>
    )
  }
}

export default Access
