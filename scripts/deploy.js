// Trong file scripts/deploy.js

const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying SLVRToken with the account:", deployer.address);

  const SLVRToken = await ethers.getContractFactory("SLVRToken");
  const slvrToken = await SLVRToken.deploy(
    "Layerzerov2", // Thay thế bằng tên token thực tế
    "SLVR", // Thay thế bằng symbol token thực tế
    "0x464570adA09869d8741132183721B4f0769a0287", // Địa chỉ của LayerZero Endpoint
    deployer.address // Địa chỉ chủ sở hữu token
  );

  await slvrToken.deployed();

  console.log("SLVRToken deployed to:", slvrToken.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
