<template>
    <div class="arena-container">
        <div class="container">
            <div>
                <div
                    class="loading-indicator"
                    v-if="attackState === 'attacking'"
                >
                    <div class="loading-indicator-in">
                        <div class="attacking-box">⚔️ 战斗中</div>
                        <Fighting />
                    </div>
                </div>
                <div class="result-content">
                    <div class="attack-container">
                        <button class="cta-button" @click="attackAction">
                            <span>{{ `💥 战 ${boss.name}` }} </span>
                        </button>
                    </div>
                </div>
                <div class="arena-box">
                    <div class="thumb-img ml-xl-50-none">
                        <div class="boss-container" v-if="boss">
                            <div id="toast" className="show">
                                <div id="desc">
                                    {{
                                        `💥 &nbsp;&nbsp;${boss.name} 战斗损耗 ${characterNFT.attackDamage}`
                                    }}
                                </div>
                            </div>
                            <div :class="`boss-content ${attackState}`">
                                <div class="grid-inner">
                                    <h2 class="grid-name">
                                        🔥 {{ boss.name }} 🔥
                                    </h2>
                                    <div class="image-content">
                                        <img
                                            :src="boss.imageURI"
                                            :alt="`Boss ${boss.name}`"
                                        />
                                    </div>
                                    <div class="health-bar">
                                        <div class="health-barin">
                                            <progress
                                                :value="boss.hp"
                                                :max="boss.maxHp"
                                            ></progress>
                                            <p>
                                                {{
                                                    `${boss.hp} / ${boss.maxHp} HP`
                                                }}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="thumb-vs">
                        <img src="/assets/images/vs.png" alt="" />
                    </div>
                    <div class="thumb-img mr-xl-50-none">
                        <div class="boss-container" v-if="characterNFT">
                            <div class="stats">
                                <div class="desc">
                                    {{
                                        `⚔️  &nbsp;&nbsp;战斗损耗： ${characterNFT.attackDamage}`
                                    }}
                                </div>
                            </div>
                            <div class="boss-content ${attackState}">
                                <div class="grid-inner">
                                    <h2 class="grid-name">
                                        ⚔️ {{ characterNFT.name }} ⚔️
                                    </h2>
                                    <div class="image-content">
                                        <img
                                            :src="characterNFT.imageURI"
                                            :alt="`Character
            ${characterNFT.name}`"
                                        />
                                    </div>
                                    <div class="health-bar">
                                        <div class="health-barin">
                                            <progress
                                                :value="characterNFT.hp"
                                                :max="characterNFT.maxHp"
                                            />
                                            <p>
                                                {{
                                                    `${characterNFT.hp} / ${characterNFT.maxHp} HP`
                                                }}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Fighting from "./Fighting.vue";
export default {
    components: {
        Fighting,
    },
    methods: {
        async attackAction() {
            await this.$store.dispatch("attackBoss");
        },
    },
    async mounted() {
        await this.$store.dispatch("fetchBoss");
    },
    computed: {
        boss() {
            return this.$store.getters.boss;
        },
        characterNFT() {
            return this.$store.getters.characterNFT;
        },
        attackState() {
            return this.$store.getters.attackState;
        },
    },
};
</script>

<style scoped>
.arena-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    padding-top: 200px;
    color: white;
    height: 950px;
    margin-top: -170px;
    margin-bottom: 30px;
    background: url(/assets/images/bg.jpeg) center no-repeat;
}
.arena-container .container {
    max-width: 1200px;
    position: relative;
}
.ml-xl-50-none {
    margin-left: -50px;
}
.mr-xl-50-none {
    margin-right: -50px;
}
.arena-box {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between !important;
}
.thumb-vs {
    padding-top: 320px;
}
.arena-box .thumb-img {
    width: 420px;
    height: 590px;
    position: relative;
    animation: rotating 15s linear infinite;
}
.grid-name {
    display: block;
    width: 100%;
    position: absolute;
    left: 0px;
    font-size: 36px;
    bottom: 50px;
}
.arena-container .boss-container {
    position: relative;
    margin-bottom: 50px;
}
.result-content {
    padding-top: 100px;
    text-align: center;
    margin-bottom: -150px;
}
.grid-inner {
    width: 100%;
    height: 100%;
    position: relative;
}
.boss-container .boss-content {
    position: absolute;
    width: 100%;
    padding: 15px;
    height: 100%;
    border-radius: 10px;
    margin-bottom: 25px;
}
.boss-content h2 {
    margin: 0;
    padding: 5px 0 10px 0;
}
.boss-content .image-content,
.player .image-content {
    position: relative;
    height: 390px;
}
.boss-content .image-content img {
    max-width: 100%;
    border-radius: 10px;
    object-fit: cover;
}
.health-bar {
    position: absolute;
    bottom: -70px;
    left: 0;
    width: 100%;
    height: 50px;
    color: #fff;
}
.image-content h2 {
    font-size: 16px;
}
.health-barin {
    position: relative;
    width: 100%;
    height: 100%;
}
.health-bar progress[value] {
    position: absolute;
    left: 0px;
    height: 100%;
    z-index: 1;
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    padding: 0px;
    margin: 0px;
}
.health-bar progress[value]::-webkit-progress-bar {
    background-color: rgba(#e5652e, 0.5);
    border-radius: 15px;
    overflow: hidden;
}
.health-bar progress[value]::-webkit-progress-value {
    background-color: rgba(#70cb1b, 0.5);
}
.health-bar p {
    display: block;
    position: absolute;
    width: 100%;
    height: 50px;
    padding: 0px;
    margin: 0px;
    left: 0px;
    top: 0px;
    z-index: 2;
    line-height: 50px;
    font-weight: bold;
    font-size: 14px;
    color: #fff;
}
.arena-container .players-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
}
.players-container .player {
    display: flex;
    flex-direction: column;
    max-height: 80%;
    padding: 10px;
    border-radius: 10px;
    background-color: gray;
}
.player .image-content img {
    width: 250px;
    border-radius: 10px;
    object-fit: cover;
}
.players-container .active-players {
    display: flex;
    flex-direction: column;
}
.active-players .players-list {
    display: flex;
    flex-direction: column;
    max-height: 400px;
    overflow: scroll;
}
.players-list .active-player-item {
    display: flex;
    align-items: center;
    background-color: #b12a5b;
    border-radius: 8px;
    margin: 5px;
    padding: 10px;
    font-size: 18px;
    font-weight: bold;
}
.active-player-item .player-image {
    width: 64px;
    height: 64px;
    background-color: gray;
    margin-right: 15px;
    border-radius: 8px;
}
.active-player-item .player-content {
    flex-direction: column;
    text-align: left;
}
.players-container .attack-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.boss-container {
    position: relative;
    width: 100%;
    height: 100%;
}
/* Effects */
.boss-container .attacking {
    animation: shake 1.2s cubic-bezier(0.36, 0.07, 0.19, 0.97) both infinite;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 1000px;
}
.boss-container .hit {
    animation: hit-bounce 1s ease;
}
@keyframes shake {
    10%,
    90% {
        transform: translate3d(-1px, 0, 0);
    }
    20%,
    80% {
        transform: translate3d(2px, 0, 0);
    }
    30%,
    50%,
    70% {
        transform: translate3d(-4px, 0, 0);
    }
    40%,
    60% {
        transform: translate3d(4px, 0, 0);
    }
}
@keyframes hit-bounce {
    0% {
        transform: scale(1) translateY(0);
    }
    10% {
        transform: scale(1.2, 0.6);
    }
    30% {
        transform: scale(0.8, 1.1) translateY(-10px);
    }
    50% {
        transform: scale(1) translateY(0);
    }
    100% {
        transform: translateY(0);
    }
}
/* Toast */
#toast,
.stats {
    position: absolute;
    width: 100%;
    left: 0px;
    bottom: 0px;
}
#toast #desc,
.stats .desc {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    height: 40px;
    overflow: hidden;
    white-space: nowrap;
}
.loading-indicator {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 999;
}
.loading-indicator-in {
    position: relative;
    width: 100%;
    height: 100%;
}
.boss-container .loading-indicator p {
    font-weight: bold;
    font-size: 28px;
}
.attacking-box {
    position: absolute;
    z-index: 10;
    left: 30px;
    right: 30px;
    bottom: 160px;
}
</style>
