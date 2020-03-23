<template>
    <div>
        哈哈哈
        <div v-show="show">请填写</div>
        <div>{{haha}}</div>
        <input type="text" v-model="mas" @blur.prevent="changeCount()">
    </div>
</template>
<script>
export default {
 data(){
     return {
         mas : '',
         show:false,
         haha:'弄好'
     }
 },
 methods:{
     changeCount(){
         if(this.mas == ''){
             this.show = true
         }
     }
 }
}
</script>
<style scoped>
</style>