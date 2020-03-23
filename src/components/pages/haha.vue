<template>
  <div class="box">
    <router-link to="/haha/keeps">keeps</router-link>
    <router-link to="/haha/keep">keep</router-link>

    <keep-alive>
      <router-view />
    </keep-alive>
    <My-bottom></My-bottom>
  </div>
</template>
<script>
import MyBottom from "../views/bottom";
export default {
  components: {
    MyBottom
  }
};
</script>
<style scoped>
.box {
  height: 100%;
}
</style>