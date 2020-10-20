<template>
    <div class="goods-item" @click="itemClick">
        <img v-lazy="showImage" alt="" @load="itemLoading">
        <div class="goods-info">
            <p>{{item.title}}</p>
            <!-- 这里也对详情页和主页做了一个或的判断 -->
            <span class="price">{{item.orgPrice || item.price}}</span>
            <span class="fav">{{item.cfav}}</span>
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
        props:{
            item:{
                type:Object,
                default(){
                    return {}
                }
            }
        },
        computed: {
            showImage(){
                //这里组件在首页和详情页的推荐中都有使用，两个数据不相同，这里先判断详情页的数据是否存在，然后再判断主页数据是否存在
                return this.item.image || this.item.show.img
            }
        },
        watch: {},
        methods: {
            itemLoading(){
                //home和详情页中的图片加载事件需要分开写
                if(this.$route.path.indexOf("/home")!==-1){
                    this.$bus.$emit("homeItemLoaded")
                }else if(this.$route.path.indexOf("/detial")!==-1){
                    this.$bus.$emit("detailItemLoaded")
                }
            },
            itemClick(){
                this.$router.push("/detail/"+this.item.iid)
            }
        },
    }
</script>
<style scoped>
.goods-item{
    width: 49%;
    /* margin: 1px; */
    padding: 1%;
    margin-left: 1%;
}
.goods-item img{
    width: 100%;
    height: 85%;
    border-radius: 5px;
} 
.goods-info{
    text-align: center;
}

.goods-info p {
    overflow: hidden;
    /* text溢出后用省略号表示 */
    text-overflow: ellipsis;
    /* 不换行 */
    white-space: nowrap;
    margin-bottom: 3px;
  }
.price{
    margin-right: 3rem;
    color: var(--color-high-text);
}

.goods-info .fav::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/image/common/collect.svg") 0 0/14px 14px;
  }

</style>