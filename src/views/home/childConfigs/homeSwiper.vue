<template>
    <div class="swiperStyle">
        <swiper>
            <swiper-item :key="index1" v-for="(item,index1) in banner">
                <a :href="item.link">
                    <img :src="item.image" alt="" @load="swiperImgLoading">
                </a>
            </swiper-item>
        </swiper>
    </div>
</template>

<script>
    import {Swiper, SwiperItem} from 'components/common/swiper'
    export default {
        components: {
            Swiper,
            SwiperItem
        },
        data() {
            return {
                isLoaded:false
            };
        },
        props:{
            banner:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        computed: {},
        watch: {},
        methods: {
            swiperImgLoading(){
                if(!this.isLoaded){
                    //吸顶效果需要计算图片加载后的高度
                    this.$emit("imgloading")
                    this.isLoaded=true
                }
            }
        }
    }
</script>
<style>
    .swiperStyle{
        margin-top: 44px;
    }
</style>