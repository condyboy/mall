<template>
    <div class="goodsList">
        <goods-list-item class="item" :key="index" :item="list[index]" v-for="(item,index) in list"/>
    </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'
    export default {
        components: {
            GoodsListItem
        },
        data() {
            return {

            };
        },
        props:{
            list:{
                type:Array,
                defalut(){
                    return []
                }
            }
        },
        computed: {},
        watch: {},
        methods: {}
    }
</script>
<style scoped>
.goodsList{
    display: flex;
    flex-wrap:wrap;
    flex-direction:row;
}

</style>