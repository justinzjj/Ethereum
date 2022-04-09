var Web3 = require("Web3");

var net = require('net');

var web3 = new Web3(new Web3.providers.HttpProvider('http://172.17.0.3:8545'));

web3.eth.getAccounts(
    function (error, response) {
        console.log(response)
    }
)

web3 = new Web3(new Web3.providers.IpcProvider('/private/geth.ipc', net));

web3.eth.getAccounts(
    function (error, response) {
        console.log(response)
    }
)

console.log(web3.eth.accounts);