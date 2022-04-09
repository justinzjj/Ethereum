pragma solidity >=0.4.0;

contract Greeter {
    string public greeting;

    function Greeter_fun() public {
        greeting = "hello";
    }

    function setGreeting(string _greeting) public {
        greeting = _greeting;
    }

    function greet() public view returns (string) {
        return greeting;
    }
}
