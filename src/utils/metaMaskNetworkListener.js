

// var account = web3.eth.accounts[0];
// var accountInterval = setInterval(function() {
//   if (web3.eth.accounts[0] !== account) {
//     account = web3.eth.accounts[0];
//     updateInterface();
//   }
// }, 1000);


const whichNetwork = this.state.web3.version.getNetwork((err, netId) => {
  switch (netId) {
    case "1":
      console.log('This is mainnet')
      break
    case "2":
      console.log('This is the deprecated Morden test network.')
      break
    case "3":
      console.log('This is the ropsten test network.')
      break
    case "4":
      console.log('This is the Rinkeby test network.')
      break
    case "42":
      console.log('This is the Kovan test network.')
      break
    default:
      console.log('This is an unknown network.')
  }
  if(err){
    console.log('err: ', err);
  }
})
export default whichNetwork

// var transaction = web3.eth.getTransaction('0x9fc76417374aa880d4449a1f7f31ec597f00b1f6f3dd2d66f4c9c6c445836d8b', function(error, result){
//     if(!error)
//         // console.log(JSON.stringify(result));
//         result.blockNumber
//     else
//         console.error(error);
//         console.log(transaction);
// });

// {
//   "hash": "0x9fc76417374aa880d4449a1f7f31ec597f00b1f6f3dd2d66f4c9c6c445836d8b",
//   "nonce": 2,
//   "blockHash": "0xef95f2f1ed3ca60b048b4bf67cde2195961e0bba6f70bcbea9a2c4e133e34b46",
//   "blockNumber": 3, // null means not yet mined
//   "transactionIndex": 0,
//   "from": "0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b",
//   "to": "0x6295ee1b4f6dd65047762f924ecd367c17eabf8f",
//   "value": BigNumber,
//   "gas": 314159,
//   "gasPrice": BigNumber,
//   "input": "0x57cb2fc4"
// }
