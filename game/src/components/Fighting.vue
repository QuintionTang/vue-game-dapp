<template>
    <div class="lds-ring">
        <div class="fighting">
            <img
                src="https://resources.crayon.dev/suangguosha/fighting.gif"
                alt="战斗中..."
            />
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* Code found on https://loading.io/css/ */
.lds-ring {
    display: inline-block;
    position: relative;
    width: 400px;
    border-radius: 10px;
    overflow: hidden;
}
.fighting {
    display: block;
    width: 100%;
    text-align: center;
}
.fighting img {
    display: inline-block;
}
</style>
