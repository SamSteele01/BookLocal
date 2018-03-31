import React, { Component } from 'react';

let available;

class CheckAvailable extends Component{
  constructor(props){
    super(props)
    this.state = {
      tokenId : this.props.tokenId,
      time: '',
      availability: null
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
    available = this.props.RR.checkAvailable(this.state.tokenId, this.state.time,
      (err,res) => {
        if(err){
          console.log(
            'Error getting next reservation '+err
          );
        }
        console.log(res);
        this.setState({
          availability: res.toString(),
        });
      }
    );
  }

  render(){
    /** time input needs to be converted to unix time. Could take dates with hours. Checks if bed is available? */
    return(
      <div className="check-available">
        <fieldset>
          <h1>Check availability</h1>
            <div className="label-style">Token Id:
              <input id="tokenId" type="text" className="input-style" onChange={this.handleTextChange} value={this.state.tokenId} />
            </div>
            <div className="label-style"> Time: 
              <input id="time" type="text" className="input-style" onChange={this.handleTextChange} value={this.state.time} />
            </div>
            <input id="search" type="submit" value="Check Availability" className="input-button-style" onClick={this.handleSubmit} />
            {this.state.availability &&
              <div className="label-style">{this.state.availability}</div>
            }
        </fieldset>
      </div>
    )
  }
}

export default CheckAvailable
