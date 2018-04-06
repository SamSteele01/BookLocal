import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { setStore } from 'actions/dataActions';

class GetNextReservation extends Component{
  constructor(props){
    super(props)
    this.state = {
      tokenId : null,
      checkInDate: null,
      checkOutDate: null
    }
    const { dispatch } = props;
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
    const { dispatch } = this.props
    console.log("getNextReservation fired!");
    let getNextReservation;
    getNextReservation = this.props.RR.getNextReservation(this.props.web3.eth.accounts[0],
      (err,res) => {
        if(err){
          console.log(
            'Error getting next reservation '+err
          );
        }
        // this.setState({
        //   tokenId: res[0].c[0],
        //   checkInDate: this.convertFromUnixTime(res[1].c[0]),
        //   checkOutDate: this.convertFromUnixTime(res[2].c[0])
        // });
        dispatch(setStore("tokenId", res[0].c[0]))
        dispatch(setStore("checkInDate", this.convertFromUnixTime(res[1].c[0])))
        dispatch(setStore("checkOutDate", this.convertFromUnixTime(res[2].c[0])))
        console.log('res: ', res)
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
            </div>
            :
            <input id="search" type="submit" value="Get Token" className="input-button-style" onClick={this.handleSubmit} />
          }
        </fieldset>
      </div>
    )
  }
}

export default connect()(GetNextReservation)
