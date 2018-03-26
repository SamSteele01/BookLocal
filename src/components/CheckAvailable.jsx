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
    // console.log(available);
    // this.setState({
    //   availability: available,
    // });
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
    // time input needs to be converted to unix time. Could take dates with hours.
    return(
      <div className="check-available">
        <fieldset>
          <h1>Check availability</h1>
            <div style={labelStyle}>Token Id:
              <input id="tokenId" type="text" style={inputStyle} onChange={this.handleTextChange} value={this.state.tokenId} />
            </div>
            <div style={labelStyle}> Time: 
              <input id="time" type="text" style={inputStyle} onChange={this.handleTextChange} value={this.state.time} />
            </div>
            <input id="search" type="submit" value="Check Availability" style={inputButtonStyle} onClick={this.handleSubmit} />
            {this.state.availability &&
              <div style={labelStyle}>{this.state.availability}</div>
            }
        </fieldset>
      </div>
    )
  }
}

export default CheckAvailable
