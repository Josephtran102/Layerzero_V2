require('dotenv').config();
require("@nomiclabs/hardhat-waffle");
require("hardhat-dependency-compiler"); // Thêm dòng này để sử dụng plugin

const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY || "";
const MNEMONIC = process.env.MNEMONIC_ACC_TEST || "";

module.exports = {
  solidity: {
    version: "0.8.22",
  },
  dependencyCompiler: {
    paths: ["@openzeppelin/contracts", "@layerzerolabs"], // Thêm đường dẫn tới các thư viện Solidity của bạn ở đây
  },
  networks: {
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: {
        mnemonic: MNEMONIC,
      },
    },
    bsctestnet: {
      url: `https://bsc.publicnode.com`,
      accounts: {
        mnemonic: MNEMONIC,
      },
    },
  },
};
