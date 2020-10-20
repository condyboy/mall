<template>
    <div v-if="Object.keys(detailInfo).length !== 0">
        <div class="title">
            <p>{{detailInfo.title}}</p>
        </div>
        <div>
            <span class="price">{{detailInfo.price}}</span>
            <span class="old-price">{{detailInfo.oldPrice}}</span>
            <span v-if="detailInfo.discount!=''" class="discount">{{detailInfo.discount}}</span>
        </div>
        <div class="columns">
            <span class="item-columns" v-for="(item,index) in detailInfo.columns" :key="index">{{item}}</span>
        </div>
        <div class="info-service">
      <span class="info-service-item" v-for="index in detailInfo.services.length-1" :key="index">
        <img :src="detailInfo.services[index-1].icon">
        <span>{{detailInfo.services[index-1].name}}</span>
      </span>
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
            detailInfo:{
                type:Object,
                default(){
                    return {}
                }
            }
        },
        computed: {},
        watch: {},
        methods: {}
    }
</script>
<style scoped>
.title{
    padding: 10px;
    font-weight: 600;
    font-size: 15px;
}
.price{
    margin-left: 20px;
    font-size: 20px;
    color: var(--color-high-text);
}
.old-price{
    font-size: 13px;
    margin-left: 5px;
    text-decoration: line-through;
}
.discount{
    padding:2px 5px;
    /* text-align: center; */
    font-size: 12px;
    margin-left: 5px;
    background-color: var(--color-high-text);
    border-radius: 5px;
    position: relative;
    top: -5px;
    color: #fff;
}
/* .columns{
    display:flex;
    text-align: center;
    font-size: 12px;
    line-height: 30px;
    color: gray;
    margin-top: 15px;
    justify-content: space-between;
    border-bottom: 1px solid rgba(100,100,100,.1);
} */
  .columns{
    margin-top: 15px;
    line-height: 30px;
    text-align: center;
    display: flex;
    font-size: 13px;
    border-bottom: 1px solid rgba(100,100,100,.1);
    justify-content: space-between;
  }
.item-columns{
    flex: 1;
}
.info-service {
display: flex;
justify-content: space-between;
line-height: 30px;
padding: 10px;
}

.info-service-item img {
width: 14px;
height: 14px;
position: relative;
top: 2px;
}

.info-service-item span {
font-size: 13px;
color: #333;
}
</style>