<template>
    <div>
        <div class="check-button" :class="{active:isChecked}" @click="btnClick">
            <img src="~/assets/image/cart/tick.svg" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        components: {},
        data() {
            return {
                
            };
        },props:{
            isChecked:{
                type:Boolean,
            }
        },
        computed: {},
        watch: {},
        methods: {
            btnClick(){
                this.$emit("checkBtnClick")
            }
        }
    }
</script>
<style scoped>
.check-button{
    background-color: #fff;
    border-radius: 50%;
    border: 2px solid #ccc;
}

.active{
    background-color: var(--color-high-text);
    border:2px solid var(--color-high-text)
}
</style>