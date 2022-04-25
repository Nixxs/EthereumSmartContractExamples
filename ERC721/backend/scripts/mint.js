async function main(){
    const address = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0"
    const contract = await ethers.getContractAt("NFT", address);

    var tokenCount = await contract.tokenCount();
    var name = await contract.name();
    var symbol = await contract.symbol();

    console.log(tokenCount);
    console.log(name);
    console.log(symbol);

    var uri = "www.echoofreality.com/or_IPFS_location"
    await contract.mint(uri);

    tokenCount = await contract.tokenCount();
    console.log("new token count", tokenCount);
    var tokenURIFromChain = await contract.tokenURI(tokenCount);
    console.log("New Token URI from Chain: ", tokenURIFromChain);
}

main();