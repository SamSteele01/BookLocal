import React, { Component } from 'react';
import { PulseLoader } from 'react-spinners';
import './access.css';

let access;

class Access extends Component{
  static propTypes = {

  }
  constructor(props){
    super(props)
    this.state = {
      tokenId : this.props.tokenId,
      displayAccessCard: false,
      traveler: {},
      hotel: {},
      hotelProfile: {},
      renderDetails: false,
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
    // query server with reservation address or traveler Id

    // get data on hotel, reservation, roomType
    // redirect
    this.setState({
      displayAccessCard: true,
      traveler: { name: 'Sam Steele' },
      hotelProfile: {
        name: 'The Exchange Building',
        city: 'Memphis',
        state: 'TN'
      },
      reservation: {
        // ethAddress: "0x67dead453beef09034",
        initialBalence: 2.2,
        price: 2.2,
        checkIn: 17747,
        checkOut: 17749,
      }
    })
  }

  toggleDetailsRender = () => {
    this.setState({ renderDetails: !this.state.renderDetails })
  }

  setTxnListener = (txn) => {
    let listener = setInterval( () => {
      this.transaction(txn)
      if (this.state.blockNum !== null) {
        this.getTxnReceipt(txn)
        clearInterval(listener)
      }
    }, 2000)
  }

  transaction = (txn) => {
    this.props.web3.eth.getTransaction(txn, (error, result) => {
      if(!error) {
        this.setState({blockNum: result.blockNumber})
      }else{
        console.error(error);
        console.log(result);
      }
    })
  }

  getTxnReceipt = (txn) => {
    this.props.web3.eth.getTransactionReceipt(txn, (error, result) => {
      if(!error) {
        this.setState({status: result.status})
      }else{
        console.error(error);
        console.log(result);
      }
    })
  }

  render(){
    return(
      <div className="home darken">
        <div className="access">
          { !this.state.displayAccessCard ?
            <fieldset>
              { this.state.response ?
                <div>
                  { (this.state.blockNum && this.state.status!==null) ?
                    <div>
                      { this.state.status==="0x1" ?
                        <div>
                          <h1>Checked In!</h1>
                          <div>Please enjoy your stay!</div>
                        </div>
                      :
                        <div className="reserve-warning">There was a problem with checking in. Please contact Steve Lee: steven@booklocal.in</div>
                      }
                    </div>
                  :
                      // spinner
                    <div>
                      <PulseLoader color='#1b75bb' loading={true} />
                      <div>Please wait while the transaction gets mined. This could take a minute or two.</div>
                    </div>
                  }
                </div>
              :
                <div>
                  <h1>Check In</h1>
                  <div>Make sure to set MetaMask to the same address that was used to reserve your room.</div>
                  <div className="label-style">Address:
                    <input id="tokenId" type="text" className="input-style" onChange={this.handleTextChange} value={this.state.tokenId} />
                  </div>
                  {this.props.account===null || this.props.account===undefined ?
                    <div>
                      <div className="reserve-warning">Please log in to MetaMask.</div>
                      <input id="search" type="submit" className="input-button-style disabled" value="Check In" onClick={this.handleSubmit} disabled/>
                    </div>
                  :
                    <input id="search" type="submit" className="input-button-style" value="Check In" onClick={this.handleSubmit} />
                  }
                </div>
              }
            </fieldset>
          :
            <fieldset>
              <div className="label-style">
                Hello {this.state.traveler.name}
              </div>
              <div className="label-style">
                Upcoming stays:
              </div>
              <div styleName="wire-frame-box">
                <div styleName="row space-around" >
                  <div className="label-style" styleName="h-spacing">
                    {this.state.hotelProfile.name}
                  </div>
                  <div className="label-style" styleName="h-spacing">
                    {this.state.hotelProfile.city}, {this.state.hotelProfile.state}
                  </div>
                </div>
                <div styleName="row space-around" >
                  <div className="label-style" styleName="h-spacing">
                    {this.state.reservation.checkIn}
                  </div>
                  <div className="label-style" styleName="h-spacing">
                    {this.state.reservation.checkOut}
                  </div>
                </div>
                { this.state.renderDetails &&
                  <div>

                    <div className="label-style">
                      Info:
                    </div>

                    <div className="label-style">
                      Directions:
                    </div>
                    <div className="label-style">
                      Hotel Amenities:
                    </div>
                    <div className="label-style">
                      Wallet:
                    </div>
                  </div>
                }
                <div className="input-button-style" onClick={this.toggleDetailsRender}>
                  { this.state.renderDetails ? "Hide Details" : "Click to Access" }
                </div>
              </div>
            </fieldset>
          }
        </div>
      </div>
    )
  }
}

export default Access
