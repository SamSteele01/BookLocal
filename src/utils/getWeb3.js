import Web3 from 'web3'

let getWeb3 = new Promise(function(resolve, reject) {
  // Wait for loading completion to avoid race conditions with web3 injection timing.
  window.addEventListener('load', function() {
    var results
    var error
    var web3 = window.web3

    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    if (typeof web3 !== 'undefined') {
      // Use Mist/MetaMask's provider.
      web3 = new Web3(web3.currentProvider)
      results = {
        web3: web3
      }
      console.log('Injected web3 detected.');
      resolve(results)
    } else {
      // Fallback to localhost if no web3 injection. We've configured this to
      // use the development console's port by default.
        // testrpc or ganache use "http://localhost:8545"
        // truffle develop uses "http://localhost:9545"
      // var provider = new Web3.providers.HttpProvider('http://localhost:9545')
      // web3 = new Web3(provider)
      // results = {
        // web3: web3
      // }
      console.log('No web3 instance injected.');
      // resolve(results)
      error = {
        error: "You must have a MetaMask or Mist installed and aimed at the Rinkeby test network."
      }
      reject(error)
    }
  })
})

export default getWeb3
