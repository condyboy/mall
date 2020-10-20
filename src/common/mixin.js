import BackTop from 'components/content/BackTop'
export const backTopMixin={
    data() {
        return {
            isShowBackTop:false
        }
    },components:{
        BackTop
    },
    methods: {
        showBackTop(position){
            this.isShowBackTop=position.y<-2000
        },
        returnbtn(){
            this.$refs.scroll.scrollTo(0,0)
        },
    },
}