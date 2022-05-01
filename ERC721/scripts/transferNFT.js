async function main(){
    const contractAddress = "0xA70b91F5A1798a3054AAb55dD7e54c90DC7a363c"
    const contract = await ethers.getContractAt("TestNFT", contractAddress);

    const tokenID = 2;
    const currentOwner = await contract.ownerOf(tokenID);
    const transferToAddress = "0x6f27F7A33607734c9c3C2EAc3e12731Cfcf9c135"

    console.log("NFT Contract Address: ", contractAddress);
    console.log(`Transfering token ${tokenID} from ${currentOwner} to #{transferToAddress}`);
    await contract.transferFrom(currentOwner, transferToAddress, tokenID);
    console.log("successfully transferred token.");

    const newOwner = await contract.ownerOf(tokenID);
    console.log(`New token owner: ${newOwner}`);
}

main();