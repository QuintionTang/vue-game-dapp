const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory("EpicGame");
    const gameContract = await gameContractFactory.deploy(
        ["刘备", "关羽", "张飞"],
        [
            "https://resources.crayon.dev/suangguosha/liubei.png",
            "https://resources.crayon.dev/suangguosha/guanyu.png",
            "https://resources.crayon.dev/suangguosha/zhangfei.png",
        ],
        [100, 200, 300],
        [100, 50, 25],
        "吕布",
        "https://resources.crayon.dev/suangguosha/lvbu.png", // boss
        1000,
        50
    );
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account: ", deployer.address);

    console.log("Account balance: ", (await deployer.getBalance()).toString());
    await gameContract.deployed();
    console.log("Contract deployed to: ", gameContract.address);
};
const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};
runMain();
