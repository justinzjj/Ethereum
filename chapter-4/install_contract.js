var Web3 = require("web3");
var fs = require("fs");

var web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:8545'));

console.log(web3.eth.accounts);

var code = '0x' + fs.readFileSync("hello_sol_hello.abi").toString();

var abi = JSON.parse(fs.readFileSync("hello_sol_hello.abi").toString());

var contract = web3.eth.contract(abi);

// var gasValue=web3.eth.estimateGas({data:code})

// console.log("gas:"+gasValue);

console.log("account balance:" + web3.eth.getBalance(web3.eth.accounts[0]));


web3.geth.personal.unlock_account(web3.eth.accounts[0], "123456");


var contract = contract.new(
    {
        from: web3.eth.accounts[0],
        data: code,
        gas: 470000
    },
    function (e, contract) {
        console.log(e);
    }
)

