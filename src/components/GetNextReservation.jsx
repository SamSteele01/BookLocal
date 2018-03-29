import React, { Component } from 'react';
import moment from 'moment';


class GetNextReservation extends Component{
  constructor(props){
    super(props)
    this.state = {
      tokenId : null,
      checkInDate: null,
      checkOutDate: null
    }
    this.handleSubmit=this.handleSubmit.bind(this);
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState!==this.state){
        this.props.returnComponentState(this.state);
        console.log('returnComponentState fired!');
    }
  }

  convertFromUnixTime = (time) => {
    return moment.unix(time*86400+43200).format("MM/DD/YYYY")
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("getNextReservation fired!");
    let getNextReservation;
    getNextReservation = this.props.RR.getNextReservation(this.props.web3.eth.accounts[0],
      (err,res) => {
        if(err){
          console.log(
            'Error getting next reservation '+err
          );
        }
        this.setState({
          tokenId: res[0].c[0],
          checkInDate: this.convertFromUnixTime(res[1].c[0]),
          checkOutDate: this.convertFromUnixTime(res[2].c[0])
        });
        console.log('res: ', res);
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
      <div className="get-token">
        <fieldset >
          <h1>Get Token</h1>
          {this.state.tokenId ?
            <div>
              <div style={labelStyle}>Token Id: 
                <input id="tokenId" type="text" style={inputStyle} value={this.state.tokenId} readOnly/>
              </div> 
              <div style={labelStyle}>Check In Date:
                <input id="checkInDate" type="text" style={inputStyle} value={this.state.checkInDate} readOnly/>
              </div>
              <div style={labelStyle}>Check Out Date:
                <input id="checkOutDate" type="text" style={inputStyle} value={this.state.checkOutDate} readOnly/>
              </div>
            </div>
            :
            <input id="search" type="submit" value="Get Token" style={inputButtonStyle} onClick={this.handleSubmit} />
          }
        </fieldset>
      </div>
    )
  }
}

export default GetNextReservation
