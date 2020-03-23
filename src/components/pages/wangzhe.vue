<template>
  <div>
    <div class="wzpicbox">
      <img src="../../../static/images/wz02.jpg" alt />
    </div>
    <div>
      <h2 class="title">常用英雄胜率走势</h2>
      <div class="slpic">
        <img src="../../../static/images/wz03.png" alt />
      </div>
      <div>综合计算 :我觉得这赛季 玩安其拉 上王者稳了</div>
<h2 class="nltitle">能力值</h2>
      <div class="nl">
        
        <span>参团率</span>
        <el-progress :text-inside="true" :stroke-width="26" :percentage="70"></el-progress>
        <span>助攻</span>
        <el-progress :text-inside="true" :stroke-width="24" :percentage="100" status="success"></el-progress>
        <span>伤害</span>
        <el-progress :text-inside="true" :stroke-width="22" :percentage="80" status="warning"></el-progress>
        <span>承受伤害</span>
        <el-progress :text-inside="true" :stroke-width="20" :percentage="50" status="exception"></el-progress>
       
        <div class="cn">响当当的大神</div>
        
      </div>
    
    </div>
  </div>
</template>
<script>
import MyBottom from "../views/bottom";
export default {
  components: {
    MyBottom
  },
  data() {
    return {};
  }
};
</script>
<style scoped>
.wzpicbox img {
  width: 100%;
  height: 100%;
}
.title {
  font-size: 0.32rem;
  margin: 0.3rem 0 0.2rem 0.2rem;
}
/* #container{
    background: red
} */
.slpic img {
  width: 100%;
  margin-bottom: 0.2rem;
}
.nl {
  width: 80%;
  height: 5rem;
  /* background: red; */
  margin: 0 auto;
}
.nltitle {
  font-size: 0.32rem;
  margin: 0.3rem 0 0.2rem 0.2rem;
}
.cn{
    margin-top:0.33rem;
    
    font-size:0.35rem;
    text-align: center
}
</style>