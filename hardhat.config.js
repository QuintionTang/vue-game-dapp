/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("@nomiclabs/hardhat-waffle");

const config = {
    alchemy: "9aa3d95b3bc440fa88ea12eaa4456161", // 测试网络token
    privateKey: "e5275ae4ad0f4fd33eb5539e4d8af9fceaeb1c0f905fefd634423cc6aa48b", // 钱包私钥
};

module.exports = {
    solidity: "0.8.4",
    networks: {
        ropsten: {
            url: `https://ropsten.infura.io/v3/${config.alchemy}`,
            accounts: [config.privateKey],
            chainId: 3,
        },
    },
};
