<template>
    <div>
        <navbar class="detailNavbar">
            <div slot="left">
                <img src="~assets/image/common/back.svg" alt="" class="back" @click="back">
            </div>
            <div slot="middle" class="title">
                <div v-for="(item,index) in titles" :key="index" class="title-item" :class="{active:currentIndex==index}" @click="handleClick(index)">{{item}}</div>
            </div>
        </navbar>
    </div>
</template>

<script>
import navbar from 'components/common/navbar/NavBar'
    export default {
        components: {
            navbar
        },
        data() {
            return {
                titles:["商品","参数","评论","推荐"],
                currentIndex:0
            };
        },
        computed: {},
        watch: {},
        methods: {
            handleClick(index){
                this.currentIndex=index
                this.$emit("itemClick",this.currentIndex)
            },
            back(){
                this.$router.back()
            }
        }
    }
</script>
<style scoped>
.detailNavbar{
    position: relative;
    background-color: #fff;
    z-index: 9;
}
.title{
    display: flex;
    /* width: 60%; */
    font-size: 13px;
}
.title-item{
    flex: 1;
}
/* .titleContent{
    width: 60%;
} */
.active{
    color: var(--color-high-text);
}
.back{
    margin-top: 10px;
    margin-left: 10px;
    width: 35%;
}

</style>