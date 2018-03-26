import React, { Component } from 'react';

let getNextReservation;

class GetNextReservation extends Component{
  constructor(props){
    super(props)
    this.state = {
      tokenId : null,
      start: null,
      stop: null
    }
    this.handleSubmit=this.handleSubmit.bind(this);
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.tokenId!==this.state.tokenId){
        this.props.returnTokenId(this.state.tokenId);
        console.log('returnTokenId fired!');
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Access fired!");
    getNextReservation = this.props.RR.getNextReservation(this.props.web3.eth.accounts[0],
      (err,res) => {
        if(err){
          console.log(
            'Error getting next reservation '+err
          );
        }
        this.setState({
          tokenId: res[0].c
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
    // const inputStyle={
    //   height: "35px",
    //   flexGrow: "1",
    //   marginLeft: "10px",
    //   paddingLeft: "10px",
    //   border: "1px solid #ccc",
    //   fontSize: "15px",
    // }
    const inputButtonStyle={
      marginTop: '25px',
      fontWeight: "900",
      backgroundColor: "rgb(27, 117, 187)",
      padding: '5px 15px',
      color: "white",
      textTransform: "uppercase"
    }
    return(
      <div className="get-token">
        <fieldset >
          <h1>Get Token</h1>
          {this.state.tokenId ?
            <div style={labelStyle}>Token Id: 
              {this.state.tokenId}
            </div> :
            <input id="search" type="submit" value="Get Token" style={inputButtonStyle} onClick={this.handleSubmit} />
          }
        </fieldset>
      </div>
    )
  }
}

export default GetNextReservation
