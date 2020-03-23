<template>
    <div class="index">
       <div class="jiaBox" @touchstart='gonr'></div>
    </div>
</template>
<script>
export default {
 methods:{
     gonr(){
        //  console.log('哈哈哈')
        this.$router.push('/one')
     }
 }
}
</script>
<style scoped>
    .index{
        width:100%;
        height:100%;
        background: url("../../../static/images/index1.gif");
        background-size: 100% 100% ;
        position: relative
    }
    .jiaBox{
        width:1.5rem;
        height:1.5rem;
        /* background:red; */
        position: absolute;
        left:50%;
        top:60%;
        margin: -0.75rem 0 0 -0.75rem
    }
</style>