const { BigNumber } = require("ethers");

async function main(){
    const [minter] = await ethers.getSigners();
    const contractAddress = "0x3aB27D4368244467bbe22bb6Da945f467e1d3040"
    const contract = await ethers.getContractAt("nixsbux", contractAddress);
    const baseBalanceBeforeMint = (await minter.getBalance()).toString();
    
    const balanceBeforeMint = Number(baseBalanceBeforeMint) / (10**18);
    console.log("minting with the account:", minter.address);
    console.log("Account balance:", balanceBeforeMint);

    // 100 tokens = 100000000000000000000
    await contract.mint(minter.address, BigNumber.from("100000000000000000000"));
    console.log("completed minting..");

    const baseBalanceAfterMint = (await minter.getBalance()).toString();
    const costOfMint = Number(baseBalanceBeforeMint) - Number(baseBalanceAfterMint);
    console.log("cost of mint: ", costOfMint / (10**18));
}

main();