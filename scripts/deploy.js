const hre = require('hardhat');

async function main() {
    const CrowdfundingContract = await hre.ethers.getContractFactory("CrowdFunding");
    const crowdFunding = await CrowdfundingContract.deploy();

    await crowdFunding.deployed();

    console.log("CrowdFunding contract deplyed to::==>>", crowdFunding.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.log(error);
        process.exit(1);
    });