import React, { Component } from 'react';
import Home from 'wrappers/Home'

let access;

class Access extends Component{
  constructor(props){
    super(props)
    this.state = {
      access : '',
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
    access = this.props.RR.access(this.props.tokenId,
      {from: this.props.web3.eth.accounts[0], gas: 3000000},
      (err,res) => {
        if(err){
          console.log(
            'Error getting next reservation '+err
          );
        }
        console.log(res);
        this.setState({
          access: res
        });
      }
    );
  }

  render(){
    return(
      <div className="home darken">
        <div className="access">
          <fieldset >
            <h1>Check In</h1>
              <div className="label-style">Token Id:
                <input id="tokenId" type="text" className="input-style" onChange={this.handleTextChange} value={this.props.tokenId} />
              </div>
                <input id="search" type="submit" value="Check In" className="input-button-style" onClick={this.handleSubmit} />
                {this.state.access &&
                  <div className="reserve-warning">See the transaction on <a href={`https://rinkeby.etherscan.io/tx/${this.state.access}`} target="_blank" rel="noopener noreferrer">Etherscan.io.</a></div>
                }
          </fieldset>
        </div>
      </div>
    )
  }
}

export default Access
