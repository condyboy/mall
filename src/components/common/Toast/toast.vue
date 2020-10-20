<template>
    <div>
        <div v-show="isShow" class="toastText">{{message}}</div>
    </div>
</template>

<script>
    export default {
        name:"Toast",
        components: {},
        data(){
            return {
               message:"",
               isShow:false
            };
        },
        props:{

        },
        computed: {},
        watch: {},
        methods: {
            show(message,duration=1500){
                this.isShow=true
                this.message=message
                setTimeout(()=>{
                    this.isShow=false
                    this.message=""
                },duration)

            }
        }
    }
</script>
<style scoped>
.toastText{
    position: fixed;
    top: 50%;
    left: 50%;
    color: #fff;
    padding: 8px 10px;
    transform: translate(-50%,-50%);
    background-color: rgb(0,0,0,.8);
    z-index: 999;
    /* background-color: red; */
}
</style>