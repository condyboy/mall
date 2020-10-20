<template>
    <div>
        <swiper class="detail-swiper">
            <swiper-item v-for="(item,index) in topImages" :key="index">
                <img :src="item" alt="">
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

            };
        },
        props:{
            topImages:{
                type:Array,
                defualt(){
                    return []
                }
            }
        },
        computed: {},
        watch: {},
        methods: {

        }
    }
</script>
<style scoped>
.detail-swiper{
    height: 300px;
    overflow: hidden;
}
</style>