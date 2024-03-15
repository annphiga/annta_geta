// index.js

const Web3 = require('web3');

class Web3Tools {
    // Constructor to initialize Web3 instance with provider URL and timeout
    constructor(providerUrl, timeout = 10000) {
        this._web3 = new Web3(providerUrl, { timeout });
    }

    // Fetches transaction receipt by transaction hash
    async fetchTransactionReceipt(txHash) {
        return this._web3.eth.getTransactionReceipt(txHash);
    }

    // Fetches block details by block number
    async fetchBlockDetails(blockNumber) {
        return this._web3.eth.getBlock(blockNumber);
    }

    // Estimates gas usage for a transaction object
    async estimateGasUsage(txObject) {
        return this._web3.eth.estimateGas(txObject);
    }

    // Fetches current gas price
    async fetchGasPrice() {
        return this._web3.eth.getGasPrice();
    }

    // Fetches user accounts
    async fetchUserAccounts() {
        return this._web3.eth.getAccounts();
    }

    // Deploys a contract with given ABI, bytecode, from address, and gas
    async deployContract(abi, bytecode, from, gas) {
        const contract = new this._web3.eth.Contract(abi);
        const deployment = contract.deploy({ data: bytecode });
        return deployment.send({ from, gas });
    }

    // Fetches network ID
    async fetchNetworkId() {
        return this._web3.eth.net.getId();
    }

    // Fetches the latest block number
    async fetchLatestBlockNumber() {
        return this._web3.eth.getBlockNumber();
    }

    // Fetches transaction count for a given block number
    async fetchBlockTransactionCount(blockNumber) {
        return this._web3.eth.getBlockTransactionCount(blockNumber);
    }

    // Retrieves the balance of the specified address
    async getBalance(address) {
        return this._web3.eth.getBalance(address);
    }

    // Retrieves the number of transactions made by the specified address
    async getTransactionCount(address) {
        return this._web3.eth.getTransactionCount(address);
    }
}

module.exports = Web3Tools;
