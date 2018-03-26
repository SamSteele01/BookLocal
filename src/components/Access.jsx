import React, { Component } from 'react';

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
    return(
      <div className="access">
        <fieldset >
          <h1>Access</h1>
            <div style={labelStyle}>Token Id:
              <input id="tokenId" type="text" style={inputStyle} onChange={this.handleTextChange} value={this.props.tokenId} />
            </div>
              <input id="search" type="submit" value="Check In" style={inputButtonStyle} onClick={this.handleSubmit} />
              {this.state.access &&
                <div className="reserve-warning">See the transaction on <a href={`https://rinkeby.etherscan.io/tx/${this.state.access}`} target="_blank" rel="noopener noreferrer">Etherscan.io.</a></div>
              }
        </fieldset>
      </div>
    )
  }
}

export default Access
