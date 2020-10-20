<template>
    <div class="navbar">
        <!-- 在外面封装一层div添加样式，保证slot被替换时不会影响样式 -->
        <div class="left">
            <slot name="left"></slot>
        </div>
        <div class="middle">
            <slot name="middle"></slot>
        </div>
        <div class="right">
            <slot name="right"></slot>
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
        computed: {},
        watch: {},
        methods: {}
    }
</script>
<style scoped>
   .navbar{
      display: flex;
      height: 44px;
      line-height: 44px;
      box-shadow: 0 1px 1px gray;
   }
   .right,.left{
       width: 60px;
       /* background-color: aqua; */
   }
   .middle{
       flex: 1;
       text-align: center;
       /* background-color: blueviolet; */
   }
</style>