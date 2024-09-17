require('@nomiclabs/hardhat-ethers');

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: "https://mainnet.infura.io/v3/f5e8f07ac5d8484f9344fad87ce4d3b6", // Add your Infura Project ID
      accounts: [`0x${}`], // Add your wallet private key here
    },
  },
};
