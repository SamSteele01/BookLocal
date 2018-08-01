import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';


class GetNextReservation extends Component{
  constructor(props){
    super(props)
    this.state = {
      tokenId : props.tokenId ? props.tokenId : null,
      checkInDate: props.checkInDate ? props.checkInDate : "",
      checkOutDate: props.checkOutDate ? props.checkOutDate : ""
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
    console.log('time: ', time);
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
    return(
      <div className="get-token">
        <fieldset >
          <h1>Get Token</h1>
          {this.state.tokenId ?
            <div>
              <div className="label-style">Token Id: 
                <input id="tokenId" type="text" className="input-style" value={this.state.tokenId} readOnly/>
              </div> 
              <div className="label-style">Check In Date:
                <input id="checkInDate" type="text" className="input-style" value={this.state.checkInDate} readOnly/>
              </div>
              <div className="label-style">Check Out Date:
                <input id="checkOutDate" type="text" className="input-style" value={this.state.checkOutDate} readOnly/>
              </div>
              <div className="reserve-warning">Please store your tokenId for event check-in.</div>
            </div>
          :
            <div>
              {this.props.account===null || this.props.account===undefined ?
                <div>
                  <div className="reserve-warning">Please log in to MetaMask.</div>
                  <input id="search" type="submit" className="input-button-style disabled" value="Get Token" onClick={this.handleSubmit} disabled/>
                </div>
              :
                <input id="search" type="submit" className="input-button-style" value="Get Token" onClick={this.handleSubmit} />
              }
            </div>
          }
            {/* <input id="search" type="submit" value="Get Token" className="input-button-style" onClick={this.handleSubmit} /> */}
        </fieldset>
      </div>
    )
  }
}
GetNextReservation.propTypes = {
  web3: PropTypes.object,
  RR: PropTypes.object,
  returnComponentState: PropTypes.func
}

export default GetNextReservation
