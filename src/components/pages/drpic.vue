<template>
    <div>
       <img :src="xixi" alt="" class="drpic">
       <div class="txt">
           一道光  啊!  我的眼睛
       </div>
    </div>
</template>
<script>
export default {
 data(){
     return{
         obj:{},
         xixi:''
     }
 },
 mounted(){
     this.xixi = this.$route.params.url;
     console.log(this.xixi)
    var id = this.$route.params.id;
 }
}
</script>
<style scoped>
.drpic{
    width:100%;
    height: 100%;
}
.txt{
   text-align: center;
   font-size: 0.5rem;
}
</style>