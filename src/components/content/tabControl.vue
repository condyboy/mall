<template>
    <div class="control">
        <div class="control-item" :class="{activeItem:index===currentIndex}" @click="handleAcitve(index)" :key="index" v-for="(item,index) in items">
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        components: {},
        data() {
            return {
                currentIndex:0
            };
        },
        props:{
            items:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        computed: {},
        watch: {},
        methods: {
            handleAcitve(index){
                this.currentIndex=index
                this.$emit("tabClick",index)
            }
        },mounted() {
            // console.log("tab")
        },
    }
</script>
<style scoped>
    .control{
        display: flex;
        text-align: center;
        font-size: 15px;
        background-color: #fff;
    }
    .control-item{
        flex: 1;
        line-height: 40px;
    }
    .activeItem{
        color: var(--color-high-text);
        
    }
    .activeItem span{
        padding-bottom: 6px;
        border-bottom: 3px solid var(--color-high-text);
    }
</style>