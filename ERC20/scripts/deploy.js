async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);
    console.log("Account balance:", (await deployer.getBalance()).toString());

    // Get the ContractFactories and Signers here.
    const TokenContract = await ethers.getContractFactory("nixsbux");
    const contract = await TokenContract.deploy();

    console.log("Token Contract Address", contract.address);
}

main();