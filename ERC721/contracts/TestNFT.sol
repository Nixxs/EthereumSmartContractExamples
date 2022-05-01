// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract TestNFT is ERC721URIStorage, Ownable{
    uint public tokenCount;

    constructor() ERC721("TEST NFT", "TNFT"){}

    function mint(string memory _tokenURI) external onlyOwner returns(uint){
        tokenCount += 1;
        // msg.sender comes from the ingerited ERC721 contract and is the wallet address of the
        // account that is calling this function.
        _safeMint(msg.sender, tokenCount);
        _setTokenURI(tokenCount, _tokenURI);
        return(tokenCount);
    }
}