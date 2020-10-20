<template>
    <div id="home">
        <navbar class="nav"><div slot="middle">购物街</div></navbar>
        <tab-control ref="tabcontrol2" class="tab-control" v-show="isTabFixed" :items="['流行','新颖','精选']" @tabClick="tabClick"></tab-control>
        <scroll class="content" ref="scroll" :probe-type="3" @ScrollP="handleScroll" @pullingUpLoading="handleLoading" :pull-up-load="true"> 
        <home-swiper :banner="banner" @imgloading="imgloading"></home-swiper>
        <recommend-view :recommend="recommend"></recommend-view>
        <feature-view></feature-view>
        <tab-control ref="tabcontrol1" :class="{tabcontrol: isTabFixed}" :items="['流行','新颖','精选']" @tabClick="tabClick"></tab-control>
        <goods-list :list="getGoods"></goods-list>
        </scroll>
        <back-top @click.native="returnbtn" v-show="isShowBackTop"></back-top>
    </div>
    
</template>

<script>
    import navbar from "components/common/navbar/NavBar"
    import GoodsList from 'components/content/goods/GoodsList'
    import Scroll from "components/common/Scroll/Scroll"

    import homeSwiper from "./childConfigs/homeSwiper"
    import recommendView from './childConfigs/recommendView'
    import featureView from './childConfigs/featureView'
    


    import tabControl from 'components/content/tabControl'

    import {debounce} from 'common/utils'
    import {backTopMixin} from 'common/mixin'


    import {getHomeMultidata,getHomeData} from 'network/home'
    export default {
        components: {
            navbar,
            homeSwiper,
            recommendView,
            featureView,
            tabControl,
            GoodsList,
            Scroll,
        },
        mixins:[backTopMixin],
        data() {
            return {
               banner:null,
               recommend:null,
            //    page是我们每个模块当前滑动到第几个页面，list存储的是当前模块缓存的所有已经请求到的数据
               goods:{
                "pop":{
                    page:0,
                    list:[]
                },
                "new":{
                    page:0,
                    list:[]
                },
                "sell":{
                    page:0,
                    list:[]
                }
               },
               currentType:"pop",
               tabControlOffest:null,
               isTabFixed:false
            };
        },
        computed: {
            getGoods(){
                return this.goods[this.currentType].list
            }
        },
        watch: {},
        methods: {
            // 网络请求相关
            getHomeData(type){
                let page=this.goods[type].page+1
                getHomeData(type,page).then(res=>{
                    //利用对象得结构将数组中得数据取出并拼接到list中
                    this.goods[type].list.push(...res.data.list)
                    // console.log(res)
                    this.goods[type].page=this.goods[type].page+1
                })
            },
            getHomeMultidata(){
                getHomeMultidata().then(res=>{
                this.banner=res.data.banner.list;
                this.recommend=res.data.recommend.list;
                })
            },
            // 事件监听相关
            tabClick(index){
                // console.log(index)
                switch(index){
                    case 0:
                        this.currentType="pop"
                        break
                    case 1:
                        this.currentType="new"
                        break
                    case 2:
                        this.currentType="sell"
                        break
                }
                this.$refs.tabcontrol2.currentIndex=index
                this.$refs.tabcontrol1.currentIndex=index
                
            },
            
            
            handleScroll(position){       
                this.showBackTop(position)
                this.isTabFixed= -position.y > this.tabControlOffest
            },
            handleLoading(){
                this.getHomeData(this.currentType)
            },
            imgloading(){
                this.tabControlOffest=this.$refs.tabcontrol1.$el.offsetTop-44
                // console.log(this.tabControlOffest)
                
            }
            
        },
        created() {
            //获取数据
            this.getHomeMultidata()
            //获取请求商品数据
            this.getHomeData("pop")
            this.getHomeData("new")
            this.getHomeData("sell")
            
        },mounted() {
            //3、监听图片加载完成
            const db=debounce(this.$refs.scroll.refresh,30)
            this.$bus.$on("homeItemLoaded",()=>{
                db()
            })

            //制作tabcontrol吸顶效果，获取tabcontrol内元素的offsettop
            // console.log(this.$refs.tabcontrol.$el.offsetTop)
        },
    //     beforeRouteLeave (to, from, next) {
    //         if(to.path.indexOf("detail") !=-1){
    //             // this.$store.isTabbarShow=false
    //             this.$store.commit("changeTabbar")
    //         }
    //         next()
    // }
    }
</script>
<style scoped>
    @import "~@/assets/css/base.css";
    #home{
        height: 100vh;
    }
    .nav{
       background-color: var(--color-tint);
       color: #fff;
       /* position: fixed;
       top: 0;
       left: 0;
       right: 0;
       z-index: 10; */
    }
    /* 原来的吸顶 */
    /* .tabcontrol{
        position: sticky;
        top: 44px;
    } */
    /* 因为父元素中Scroll是通过transform实现的，所以子元素中设置fixed会导致失效，所以使用狸猫换太子,但是这里的样式必须加，加上当我们的高度大于某值的时候，我们的tabcontrol对于父布局来说是固定的，就不会出现两个同时显示的情况 */
    .tabcontrol{
        position: fixed; 
        /* right: 0; */
        /* margin-top:80px; */
        /* 这里的top可以设置任意的值，只要保证tabbar不露出来即可，这里保险起见，就设置到固定在scroll父布局的最上方 */
        top: 0px;  
    }
    .content{
        height: calc(100% - 93px); 
        /* margin-top: 44px; */
        overflow: hidden;
    }  
    .tab-control{
        position: relative;
        z-index: 9;
    }
</style>