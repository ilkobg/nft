import { HardhatUserConfig, task } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: {
  version: "0.8.17",
  settings: {
    optimizer: {
      enabled: true,
      runs: 200,
      },
    },
  },
};

const lazyImport = async (module: any) => {
  return await import(module);
};

task("deploy", "Deploys contract with pk")
  .addParam("privateKey", "Please provide the private key")
  .setAction(async ({ privateKey }) => {
    const { main } = await lazyImport("./scripts/deploy");
    await main(privateKey);
});


export default config;
