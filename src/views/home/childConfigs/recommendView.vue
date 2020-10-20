<template>
    <div class="recommend">
        <div class="recommend-item" :key="index" v-for="(item,index) in recommend">
            <a :href="item.link">
                <img :src="item.image">
                <div>{{item.title}}</div>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        components: {},
        data() {
            return {

            };
        },props:{
            recommend:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        computed: {},
        watch: {},
        methods: {}
    }
</script>
<style>
    .recommend{
        display: flex;
        width: 100%;
        flex-direction:row;
        text-align: center;
        font-size: 12px;
        padding: 10px 5px 25px;
        /* margin-bottom: 10px; */
        border-bottom: 5px solid #eee;
    }
    .recommend-item img{
         width: 80%;
         height: auto;
    }
    .recommend-item{
        flex: 1 1 auto;
    }

</style>