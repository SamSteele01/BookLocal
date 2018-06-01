import React, { Component } from 'react';
import Home from 'wrappers/Home'

let settle;

class Settle extends Component{
  constructor(props){
    super(props)
    this.state = {
      tokenId : this.props.tokenId,
      settle : '',
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
    console.log("Settle fired!");
    settle = this.props.RR.settle(this.state.tokenId,
      {from: this.props.web3.eth.accounts[0], gas: 3000000},
      (err,res) => {
        if(err){
          console.log(
            'Error sending Settle request '+err
          );
        }
        console.log(res);
        this.setState({
          settle: res
        });
      }
    );
  }

  render(){
    return(
      <div className="home darken">
        <div className="settle">
          <fieldset>
            <h1>Check Out</h1>
              <div className="label-style">Token Id:
                <input id="tokenId" type="text" className="input-style" onChange={this.handleTextChange} value={this.state.tokenId} />
              </div>
              <input id="submit" type="submit" value="Check Out" className="input-button-style" onClick={this.handleSubmit} />
              {this.state.settle}
          </fieldset>
        </div>
      </div>
    )
  }
}

export default Settle
