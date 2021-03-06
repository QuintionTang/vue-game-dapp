# vue-game-dapp

使用 Solidity、Web3 和 Vue.js 创建区块链游戏

### 开始

进入文件 `hardhat.config.js` ，增加一个钱包私钥和网络 Token。

安装依赖：

```
npm install
```

然后测试合约

```
npx hardhat test
```

发布部署合约，下面的指令为部署到 ETH 测试网络 ropsten

```
npx hardhat run scripts/deploy.js --network ropsten
```

进入前端目录：

```
cd game
```

安装依赖

```
yarn install
```

启动前端

```
yarn serve
```

即可正常启动。

### 体验

![GAME UI](https://s2.51cto.com/images/20220305/1646465891354624.jpeg)

**体验地址：**[https://web3-game.crayon.dev/](https://web3-game.crayon.dev/)
