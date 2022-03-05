<template>
    <div class="app" id="app">
        <div class="mx-auto">
            <div class="header-container">
                <p class="header gradient-text">⚔️ 三英战吕布 ⚔️</p>
                <p class="sub-text">
                    以刘备、关羽、张飞兄弟三人与猛将吕布的殊死战斗为描述对象，描绘了一场酣畅淋漓的沙场血拼。
                </p>
                <div class="connect-wallet-container" v-if="!account">
                    <img
                        src="https://resources.crayon.dev/suangguosha/header.png"
                        alt=""
                    />
                    <button
                        class="cta-button connect-wallet-button"
                        @click="connect"
                    >
                        <span>连接钱包并开始</span>
                    </button>
                </div>
                <select-character v-else-if="account && !characterNFT" />
                <arena v-else-if="account && characterNFT" />
            </div>
            <div class="footer-container">
                <img
                    alt="Twitter Logo"
                    class="twitter-logo"
                    src="./assets/twitter-logo.svg"
                />
                <a
                    class="footer-text"
                    :href="twitter_link"
                    target="_blank"
                    rel="noreferrer"
                    >built with @{{ twitter_handle }}</a
                >
            </div>
        </div>
    </div>
</template>

<script>
import SelectCharacter from "./components/SelectCharacter.vue";
import Arena from "./components/Arena.vue";
export default {
    name: "App",
    data() {
        return {
            twitter_handle: "DevPointCn",
            twitter_link: "https://twitter.com/DevPointCn",
        };
    },
    methods: {
        async connect() {
            await this.$store.dispatch("connect", 1);
        },
    },
    async mounted() {
        await this.$store.dispatch("connect");
    },
    computed: {
        account() {
            return this.$store.getters.account;
        },
        mining() {
            return this.$store.getters.mining;
        },
        characterNFT() {
            return this.$store.getters.characterNFT;
        },
    },
    components: {
        SelectCharacter,
        Arena,
    },
};
</script>

<style>
.app {
    height: 100vh;
    overflow: scroll;
    text-align: center;
}
.container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.header-container {
    padding-top: 30px;
}
.header {
    margin: 0;
    font-size: 50px;
    font-weight: bold;
    color: white;
}
.sub-text {
    font-size: 14px;
    color: white;
}
.content-container {
    background-color: #a200d6;
}
.cta-button {
    padding: 10px 25px;
    margin: 0 8px;
    text-align: center;
    touch-action: manipulation;
    font-size: 32px;
    vertical-align: middle;
    white-space: nowrap;
    position: relative;
    z-index: 1;
    color: #fff;
    font-weight: 700;
    line-height: 60px;
    transition: 0.3s cubic-bezier(0.79, 0.14, 0.15, 0.86);
    border-radius: 3px;
}
.cta-button span {
    position: inherit;
    z-index: 2;
}
.cta-button::before,
.cta-button::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    transition: 0.3s cubic-bezier(0.79, 0.14, 0.15, 0.86);
    height: 100%;
    width: 100%;
    border-radius: 4px;
}
.cta-button::before {
    content: "";
    background-color: #ff0052;
    z-index: 1;
    box-shadow: 0.2rem 0.2rem 0.5rem rgba(0, 0, 0, 0.2);
}
.cta-button::after {
    content: "";
    background-color: #fff;
    transform: translate(4px, 4px);
    z-index: 0;
}
.cta-button:hover {
    color: #ff0052;
    transform: translate(4px, 4px);
}
.cta-button:hover::after {
    background-color: #ff0052;
    transform: translate(-4px, -4px);
}
.cta-button:hover::before {
    background-color: #ffffff;
}
.connect-wallet-container {
    display: flex;
    flex-direction: column;
    margin: auto;
    max-width: 550px;
    margin-bottom: 30px;
}
.connect-wallet-container img {
    padding-bottom: 20px;
}
.connect-wallet-button {
    background-size: 200% 200%;
    animation: gradient-animation 4s ease infinite;
}
.mint-button {
    background: -webkit-linear-gradient(left, #a200d6, #ff6fdf);
    background-size: 200% 200%;
    animation: gradient-animation 4s ease infinite;
    margin-right: 15px;
}
.opensea-button {
    background-color: rgb(32, 129, 226);
}
.mint-count {
    color: white;
    font-size: 18px;
    font-weight: bold;
}
.footer-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 30px;
}
.twitter-logo {
    width: 35px;
    height: 35px;
}
.footer-text {
    color: white;
    font-size: 16px;
    font-weight: bold;
}
/* KeyFrames */
@-webkit-keyframes gradient-animation {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}
@-moz-keyframes gradient-animation {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}
@keyframes gradient-animation {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}
</style>
