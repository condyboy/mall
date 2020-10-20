<!--  -->
<template>
<div>
    <div id="tabbar">
        <slot></slot>
    </div>
</div>
</template>

<script>
export default {
    components: {},
    data() {
    return {

    };
    },
    computed: {},
    watch: {},
    methods: {
    }
}
</script>
<style scoped>
     #tabbar{
        display: flex;
        flex-direction:row;
        /* 背景颜色封装时应该传入 */
        background-color: #fff;  
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        box-shadow: 0px -2px 1px rgb(100, 100, 100,0.2);
    }
</style>