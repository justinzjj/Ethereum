// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.0 <0.9.0;

contract SimpleStoage {
    uint256 storedData;

    function set(uint256 x) public {
        storedData = x;
    }

    function get() public view returns (uint256) {
        return storedData;
    }
}


contract BooleanContract{
    function generatFlag(bool f1,bool f2,bool f3) public view returns(bool)  {
        return (!f1&&f2||f3)!=true;
    }
}


