import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@typechain/hardhat"; // ✅ ADD THIS

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  typechain: {
    outDir: "typechain-types", // ✅ this must match your import
    target: "ethers-v6", // ✅ works with ethers v6
  },
};

export default config;
