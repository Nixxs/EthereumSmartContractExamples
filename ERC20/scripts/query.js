async function main(){
    //const address = "0xb588dfadfdbce8820861c1e08b58f1364e58a1f5"
    const address = "0x48bab1e48de0Fcdc857D64a5A512F3A1196156a5"
    const contract = await ethers.getContractAt("nixsbux", address);

    console.log(contract);

    //const name = await contract.name();
    var symbol = await contract.name();
    // const myBalance = await contract.balanceOf("0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266");
    // const totalSupply = await contract.totalSupply();

    //console.log(name);
    // console.log(symbol);
    // console.log("My Balance: ", myBalance.toNumber());
    // console.log("Total Token Supply: ", totalSupply.toNumber());
}

main();