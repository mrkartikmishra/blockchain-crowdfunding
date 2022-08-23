/** @type import('hardhat/config').HardhatUserConfig */

require("@nomicfoundation/hardhat-toolbox");

require('dotenv').config({ path: './.env.local' });

task("accounts", "Prints list of all accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for(const account of accounts) {
    console.log(account.address);
  }

});

const rpcUrl = process.env.NEXT_PUBLIC_RPC_URL;
const privateKey = process.env.NEXT_PUBLIC_PRIVATE_KEY;

module.exports = {
  solidity: "0.8.9",
  defaultNetwork: 'rinkeby',
  networks: {
    hardhat: {},
    rinkeby: {
      url: rpcUrl,
      accounts: [privateKey]
    }
  }
};
