// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract nixbux is ERC20 {
    address public admin;
    
    constructor() ERC20("NIX BUX", "NIX"){
        admin = msg.sender;
        _mint(msg.sender, 500 * 10 ** 18);
    }

    function mint (address to, uint amount) external {
        require(msg.sender == admin, "must be admin to mint");
        _mint(to, amount);
    }
}