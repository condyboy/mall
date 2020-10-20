<template>
    <div id="detail">
        <detail-navbar @itemClick="handleItemClick" ref="navbar"></detail-navbar>
        <scroll ref="scroll" class="content" :probeType="3" @ScrollP="handleScroll">
            <detail-swiper ref="base" :topImages="topImages" class="detail-swiper"></detail-swiper>
            <detail-info-top :detailInfo="detailInfo"></detail-info-top>
            <detail-shop-info :shop="shopInfo"></detail-shop-info>
            <detail-goods-info :detailGoodsInfo="detailGoodsInfo"></detail-goods-info>
            <detail-param-info ref="dparam" :paramInfo="paramsInfo"></detail-param-info>
            <detail-comment-info ref="comment" :commentInfo="comment"></detail-comment-info>
            <detail-goods-item ref="recommend" :list="recommend"></detail-goods-item>
        </scroll>
        <detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>
        <back-top @click.native="returnbtn" v-show="isShowBackTop"></back-top>
        <!-- <toast message="加入购物车成功"></toast> -->
    </div>
</template>

<script>
import detailNavbar from './childComps/detailNavBar'
import {getDetail,Detail,Shop,GoodsParam,getRecommend} from 'network/detail'
import detailSwiper from './childComps/detailSwiper'
import detailInfoTop from './childComps/detailInfoTop'
import detailShopInfo from './childComps/detailShopInfo'
import Scroll from 'components/common/Scroll/Scroll'
import detailGoodsInfo from './childComps/detailGoodsInfo'
import {debounce} from 'common/utils'
import detailParamInfo from './childComps/detailParamInfo'
import detailCommentInfo from './childComps/detailCommentInfo'
import detailGoodsItem from 'components/content/goods/GoodsList'
import detailBottomBar from './childComps/DetailBottomBar'
import {backTopMixin} from 'common/mixin'
// import Toast from 'components/common/Toast/toast'
    export default {
        name:"detail",
        components: {
            detailNavbar,
            detailSwiper,
            detailInfoTop,
            detailShopInfo,
            Scroll,
            detailGoodsInfo,
            detailParamInfo,
            detailCommentInfo,
            detailGoodsItem,
            detailBottomBar,
            // Toast
        },
        mixins:[backTopMixin],
        data() {
            return {
                iid:null,
                topImages:null,
                detailInfo:{},
                shopInfo:{},
                detailGoodsInfo:{},
                paramsInfo:{},
                comment:{},
                recommend:[],
                // 点击后跳转到对应主题的距离
                themeTopY:[],
            };
        },
        computed: {},
        watch: {},
        methods: {
            //执行联动,点击按钮跳转到对应参数的位置
            handleItemClick(index){
                this.$refs.scroll.scrollTo(0,-this.themeTopY[index],500)
            },refreshThemeTopY(){
                this.themeTopY=[]
                // this.themeTopY.push(0)
                //这里需要先判断一下元素是否已经加载,然后再通过$el获取元素值
                if (this.$refs.dparam && this.$refs.comment && this.$refs.recommend) {
                this.themeTopY.push(0)
                this.themeTopY.push(this.$refs.dparam.$el.offsetTop-44)
                this.themeTopY.push(this.$refs.comment.$el.offsetTop-44)
                this.themeTopY.push(this.$refs.recommend.$el.offsetTop-44)
                //为了后面查看滚动区间,减少判断设置最大值
                this.themeTopY.push(Number.MAX_VALUE)
                // console.log(this.themeTopY)
                }
            },handleScroll(position){
                this.showBackTop(position)
                var positionY=-position.y
                for(let i = 0 ; i < this.themeTopY.length-1 ; i++){
                    if(i!==this.currentIndex &&(positionY>=this.themeTopY[i] && positionY<= this.themeTopY[i+1])){
                        this.$refs.navbar.currentIndex=i
                    }
                }
            },addToCart(){
                // console.log("添加到购物车")
                const obj = {}
                obj.iid=this.iid
                obj.image=this.topImages[0]
                obj.title=this.detailInfo.title
                obj.desc = this.detailInfo.desc
                obj.price=this.detailInfo.nowprice
                obj.count=0
                this.$store.dispatch("addCart",obj)
                this.$toast.show("加入购物车",1500)
            }
        },
        created() {
            this.iid=this.$route.params.iid
            getDetail(this.iid).then(res=>{
                //通过分解res的各项数据，通过类进行组织，或者直接保存
                //取出轮播图数据
                this.topImages=res.result.itemInfo.topImages
                //取出商品的对象
                this.detailInfo=new Detail(res.result.itemInfo,res.result.shopInfo.services,res.result.columns)
                //取出店铺的信息
                this.shopInfo=new Shop(res.result.shopInfo)
                //取出详情的信息
                this.detailGoodsInfo=res.result.detailInfo
                //取出参数的信息
                this.paramsInfo=new GoodsParam(res.result.itemParams.info, res.result.itemParams.rule)
                //取出评论信息
                if(res.result.rate.cRate!=0){
                    this.comment=res.result.rate.list[0]
                }
            })
            //请求推荐数据
            getRecommend().then(res=>{
                // console.log(res)
                this.recommend=res.data.list
            })
            // this.$nextTick(()=>{
            // })
            
        },
        // beforeRouteLeave (to, from, next) {
        //     this.$store.commit("changeTabbar")
        //     next()
        // },
        mounted() {
            //3、监听图片加载完成
            const db=debounce(this.$refs.scroll.refresh,30)
            const dbThemeY=debounce(this.refreshThemeTopY,100)
            //这里我在detialgoodsinfo和goodslistitem中都监听了图片的加载并对Scroll进行refresh
            this.$bus.$on("detailItemLoaded",()=>{
                db()
                dbThemeY()
            })
        },
    }
</script>
<style scoped>
/* .detail-swiper{
    height: 300px;
    overflow: hidden;
} */
#detail{
    height: 100vh;
}
.content{
    height: calc(100% - 80px);
    /* margin-top: 44px; */
}
</style>