require('dotenv').config();

const { Web3 } = require('web3');
const apiKey = process.env.ALCHEMY_API_KEY;

alchemyUrl = `https://eth-mainnet.g.alchemy.com/v2/${apiKey}`;
const web3 = new Web3(alchemyUrl);

async function getGasPrice() {
  const gasPrice = await web3.eth.getGasPrice();
  console.log('Gas Price in Wei:', gasPrice);
  console.log(`Gas price in Gwei: ${web3.utils.fromWei(gasPrice, 'gwei')}`);
}

module.exports = getGasPrice