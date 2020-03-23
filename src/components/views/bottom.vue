<template>
  <van-tabbar v-model="active"  active-color="#07c160"
  inactive-color="#000">
    <van-tabbar-item icon="photo" replace to="/haha/drindex">摄影</van-tabbar-item>
    <van-tabbar-item icon="aim" replace to="/haha/wangzhe">王者</van-tabbar-item>
    <!-- <van-tabbar-item icon="desktop-o" to="/haha/hzw">海贼王</van-tabbar-item> -->
    <van-tabbar-item icon="points" to="/haha/chihuo">吃货</van-tabbar-item>
  </van-tabbar>
</template>
<script>
export default {
      data() {
    return {
      active: 0
    }
   
  },
   methods:{

   }
};
</script>
<style scoped>
</style>