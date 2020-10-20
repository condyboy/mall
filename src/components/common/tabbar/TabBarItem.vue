<template>
<div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="image"></slot></div>
    <div v-else><slot name="image-active"></slot></div>
    <!-- 绑定时key不用加单引号，只有值才会引用变量，这里的active不用加‘ -->
    <div :style="getColor"><slot name="text"></slot></div>
</div>
</template>

<script>
export default {
    components: {},
    data() {
    return {
    };
    },props:{
        path:String,
        ActiveColor:{
            type:String,
            default:'red'
        }
    },
    computed: {
        isActive(){
            return this.$route.path.indexOf(this.path) !== -1
        },
        getColor(){
            //注意这里返回style中的值，内部的key直接使用，与写在html中代码的规则相同，如果value中需要字串拼接需要加上引号
           return this.isActive?{color:this.ActiveColor}:{}
        }

    },
    watch: {},
    methods: {
        itemClick(){
            this.$router.push(this.path)
        }
    }
}
</script>
<style scoped>
    .tab-bar-item{
        flex: 1;
        text-align: center;
        height: 49px;
        font-size: 12px;
        margin-top: 3px;
        /* 去掉图片下默认的3px */
        vertical-align: middle;   
    }
    .tab-bar-item img{
        height: 24px;
        width: 24px;
    }
</style>