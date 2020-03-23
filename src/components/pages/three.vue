<template>
  <div class="threeBar">
    <div class="threebox">
      <transition enter-active-class="animated rubberBand">
        <div class="minbox" v-show="show">恭喜你完成考验,生日快乐啊</div>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false
    };
  },
  mounted() {
    this.show = !this.show;
  },
  watch: {
    show: {
      handler: function() {
        var that = this;
        setTimeout(function() {
            that.$router.push('/four')
            // console.log('1')
        }, 3000);
      },
      deep: true
    }
  }
};
</script>
<style scoped>
.threeBar {
  width: 100%;
  height: 100%;
}
.threebox {
  width: 100%;
  height: 100%;
  background: url("../../../static/images/three01.png");
  background-size: 100% 100%;
  position: relative;
}
.minbox {
  width: 3.7rem;
  height: 1.5rem;
  background: rgba(135, 206, 235, 0.5);
  z-index: 55;
  border: 0.01rem solid transparent;
  border-radius: 0.3rem;
  position: absolute;
  left: 50%;
  margin-left: -2rem;
  top: 40%;
  padding: 0.3rem;
  font-size: 0.4rem;
  line-height: 0.5rem;
}
</style>