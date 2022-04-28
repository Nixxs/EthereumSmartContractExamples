const { BigNumber } = require("ethers");

async function main(){
    const [minter] = await ethers.getSigners();
    const contractAddress = "0x3aB27D4368244467bbe22bb6Da945f467e1d3040";
    const contract = await ethers.getContractAt("nixbux", contractAddress);
    const baseBalanceBeforeMint = (await minter.getBalance()).toString();
    
    const balanceBeforeMint = Number(baseBalanceBeforeMint) / (10**18);
    console.log("transfering with the account:", minter.address);
    console.log("Account balance:", balanceBeforeMint);

    const targetAddress = "0x6f27F7A33607734c9c3C2EAc3e12731Cfcf9c135";
    // 10 tokens = 10000000000000000000
    console.log("transfering 10 tokens to: ", targetAddress);
    await contract.transfer(targetAddress, BigNumber.from("10000000000000000000"));
}

main();