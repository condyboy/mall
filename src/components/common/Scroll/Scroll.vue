<template>
    <div class="wapper" ref="wapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
    export default {
        name:"Scroll",
        components: {},
        data() {
            return {
                scroll:null
            };
        },
        computed: {},
        watch: {},
        props:{
            probeType:{
                type:Number,
                default(){
                    return 0
                }
            },
            pullUpLoad:{
                type:Boolean,
                default(){
                    return false
                }
            }

        },
        methods: {
            scrollTo(x,y,time=500){
                this.scroll.scrollTo(x,y,time)
            },
            //这里前面执行方法的时候先判断有没有scroll，如果scroll为空的话，说明还没初始化完成，就执行方法了
            refresh(){
                this.scroll && this.scroll.refresh()
                // console.log("--------")
            },
            

        },
        created() {
            
        },
        mounted() {
            this.scroll=new BScroll(this.$refs.wapper,{
                click:true,
                probeType:this.probeType,
                pullUpLoad:this.pullUpLoad
            })

            this.scroll.on("scroll",(position)=>{
                // console.log(position)
                this.$emit("ScrollP",position)
            })
            if(this.pullUpLoad){
                this.scroll.on("pullingUp",()=>{
                    this.$emit("pullingUpLoading")
                    setTimeout(this.scroll.finishPullUp(),1000)    
                })
            }
        },
        destroyed() {
            // console.log("销毁") 
        },
        updated() {
            //当data刷新数据时，updated被执行，根据better-scroll2.0图片加载不成功的时候会执行这个方法
            // this.scroll && this.scroll.refresh()
        },
        
    }
</script>
<style scoped>
</style>