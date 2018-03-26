import React, { Component } from 'react';

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
      <div className="settle">
        <fieldset>
          <h1>Settle</h1>
            <div style={labelStyle}>Token Id:
              <input id="tokenId" type="text" style={inputStyle} onChange={this.handleTextChange} value={this.state.tokenId} />
            </div>
            <input id="submit" type="submit" value="Check Out" style={inputButtonStyle} onClick={this.handleSubmit} />
            {this.state.settle}
        </fieldset>
      </div>
    )
  }
}

export default Settle
