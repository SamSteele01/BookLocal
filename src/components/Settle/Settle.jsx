import React, { Component } from 'react';
import { PulseLoader } from 'react-spinners';
import PropTypes from 'prop-types'

class Settle extends Component{
  static propTypes = {
    // address: PropTypes.string,
    resContract: PropTypes.object,
  }
  constructor(props){
    super(props)
    this.state = {
      response: null,
      blockNum: null,
      status: null  // '0x0' = fail '0x1' = success
    }
  }

  // handleTextChange = (event) => {
  //   if(this.state[event.target.id] !== undefined){
  //     this.setState({[event.target.id]: event.target.value});
  //   }
  // }

  componentDidMount() {
    if (this.props.resContract) {
      this.handleSubmit()
    }
  }

  // not sure how to handle needing to send more eth
  handleSubmit = () => {
    console.log("Settle fired!");
    this.props.resContract.checkOut(
      {from: window.web3.eth.accounts[0], gas: 3000000},
      (err,res) => {
        if (err){
          console.log(`Error sending Check Out request ${err}`);
        } else {
          // console.log(res);
          // this.setState({
          //   response: res
          // });
          this.setTxnListener(res)
        }
      }
    );
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
    window.web3.eth.getTransaction(txn, (error, result) => {
      if (!error) {
        this.setState({ blockNum: result.blockNumber })
      } else {
        console.error(error);
        console.log(result);
      }
    })
  }

  getTxnReceipt = (txn) => {
    window.web3.eth.getTransactionReceipt(txn, (error, result) => {
      // if (!error) {
      //   this.setState({ status: result.status })
      // } else {
      //   console.error(error);
      //   console.log(result);
      // }
      setInterval(() => {
        this.setState({ status: '0x1' })
      }, 15000)
    })
  }

  render(){
    return(
      // <div className="home darken">
        // <div className="settle">
          <fieldset>

              <div>
                { (this.state.blockNum && this.state.status!==null) ?
                  <div>
                    { this.state.status==="0x1" ?
                      <div>
                        <h1>All settled!</h1>
                        <div>Thank you for staying with us!</div>
                      </div>
                    :
                      <div className="reserve-warning">
                        There was a problem with checking out.
                      </div>
                    }
                  </div>
                :
                  <div>
                    <PulseLoader color='#1b75bb' loading={true} />
                    <div>
                      Please wait while the transaction gets mined.
                      This could take a minute or two.
                    </div>
                    <div>
                      Any remaining Eth will be returned to your account.
                    </div>
                  </div>
                }
              </div>

          </fieldset>
        // </div>
      // </div>
    )
  }
}

export default Settle
