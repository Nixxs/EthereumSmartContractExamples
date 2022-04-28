async function main(){
    const address = "0x48bab1e48de0Fcdc857D64a5A512F3A1196156a5"
    const contract = await ethers.getContractAt("nixsbux", address);

    const name = await contract.name();
    const symbol = await contract.symbol();
    const myBalance = await contract.balanceOf("0xf1e2B7FbBd5811d896Bdbcf610b87B435826C41d");
    const totalSupply = await contract.totalSupply();

    console.log(name);
    console.log(symbol);

    // this will come back as token base units which is large so we convert back down
    // to get normal token units
    console.log("My Token Balance: ", Number(myBalance.toString()) / (10**18));
    console.log("Total Token Supply: ", Number(totalSupply.toString()) / (10**18));
}

main();