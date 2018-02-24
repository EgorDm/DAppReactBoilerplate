pragma solidity ^0.4.4;

contract Mortal {
    /* Define variable owner of the type address */
    address public owner;

    /* This function is executed at initialization and sets the owner of the contract */
    function Mortal() public {
        owner = msg.sender;
    }

    /* Function to recover the funds on the contract */
    function kill() public {
        if (msg.sender == owner) {
            selfdestruct(owner);
        }
    }
}

/** @title Greeter */
contract Greeter {
    /* Global variable that our greeter will output when poked */
    string greeting;

    /** @dev Contract constructor that sets the global `greeting` variable
      * @param _greeting A STRING value to set the global `greeting` to
      */
    function Greeter(string _greeting) {
        greeting = _greeting;
    }

    /** Greet function
      * @return greeting The STRING value stored in the global `greeting` variable
      */
    function greet() constant returns (string) {
        return greeting;
    }
}