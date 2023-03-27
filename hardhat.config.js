/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("@nomiclabs/hardhat-waffle");

const config = {
    alchemy: "9aa3d95b3bc440fa88ea12eaa4456161", // 测试网络token
    privateKey: "57517bb18fa510a7f80315c63122", // 钱包私钥
};

module.exports = {
    solidity: "0.8.4",
    networks: {
        goerli: {
            url: `https://goerli.infura.io/v3/${config.alchemy}`,
            accounts: [config.privateKey],
            chainId: 5,
        },
        sepolia: {
            url: `https://sepolia.infura.io/v3/${config.alchemy}`,
            accounts: [config.privateKey],
            chainId: 11155111,
        },
    },
};
