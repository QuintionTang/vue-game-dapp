const { expect } = require("chai");
const { ethers } = require("hardhat");
describe("EpicGame", function () {
    let gameContract;
    before(async () => {
        const gameContractFactory = await ethers.getContractFactory("EpicGame");
        gameContract = await gameContractFactory.deploy(
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
        await gameContract.deployed();
    });
    it("Should have 3 default characters", async () => {
        let characters = await gameContract.getAllDefaultCharacters();
        expect(characters.length).to.equal(3);
    });
    it("Should have a boss", async () => {
        let boss = await gameContract.getBigBoss();
        expect(boss.name).to.equal("吕布");
    });
});
