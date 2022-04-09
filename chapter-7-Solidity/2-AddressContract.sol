pragma solidity >=0.4.0 <0.9.0;
contract AddressContract {
    function testAddress(address target)  payable public returns(address,address,uint){
        address addr=0x1234;
        address curAddress=this;
        if (curAddress.balance>100000){
            target.transfer(10000);
        }
        return (addr,curAddress,target.balance);
    }
}