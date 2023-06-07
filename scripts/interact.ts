//const { ethers } = require("ethers");
const { ethers } = require("hardhat");

async function main() {

    const nft = await ethers.getContractFactory("NFT");
    const provider = new ethers.providers.JsonRpcProvider("http://localhost:8545");
    const wallet = new ethers.Wallet("0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80", provider);
    const balance = await wallet.getBalance();
    const uri = "https://ipfs.io/ipfs/QmUeMpDmobopwvJpXszxfbLfTKVicFQKiimzWdEBFdL1Lw";
    
    console.log(balance.toString())
  
    await nft.safeMint(uri, wallet.address);

    const uriFromContract = await nft.tokenURI(1);
    console.log("The toke URI is ", uriFromContract);

    const owner = await nft.ownerOf(1);
    console.log("The owner of the token with id 1 is ", owner);
  }
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  