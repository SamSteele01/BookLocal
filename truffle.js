module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: { // used if truffle console is ran
      host: "127.0.0.1",
      port: 9545,
      network_id: "*" // Match any network id
    },
    truffleDevelop: { // used 
      host: "localhost",
      port: 9545,
      network_id: "*" // Match any network id
    },
    rinkeby: { // need to change the numbers
      host: "localhost", // Connect to geth on the specified
      port: 8545,
      from: "0x0085f8e72391Ce4BB5ce47541C846d059399fA6c", // default address to use for any transaction Truffle makes during migrations
      network_id: 4,
      gas: 4612388 // Gas limit used for deploys
    }
  }
};
