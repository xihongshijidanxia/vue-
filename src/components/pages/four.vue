<template>
  <div class="fourBar">
    <transition enter-active-class="animated zoomInRight">
      <div class="fourBax" v-show="show">
        <div class="minbox">做我的伙伴吧!</div>
        <transition enter-active-class="animated zoomInRight">
          <div class="tcbox" v-show="tcboxShow" @touchstart="like">接受</div>
        </transition>
        <transition enter-active-class="animated zoomInLeft">
          <div class="tcbox1" v-show="tcbox1Show" @touchstart="nolike">再想想</div>
        </transition>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      tcboxShow: false,
      tcbox1Show: false
    };
  },
  //   mounted() {
  //     this.show = !this.show;
  //   },
  mounted() {
    this.show = !this.show;
    if (this.show  === true) {
      var that = this;
      setTimeout(function() {
        that.tcboxShow = true;
        that.tcbox1Show = true;
      }, 1500);
    }
  },
  methods: {
    like() {
      console.log("haha");
      this.$router.push('/haha')
    },
    nolike() {
      console.log("haha");
    }
  }
};
</script>
<style scoped>
.fourBar {
  width: 100%;
  height: 100%;
}
.fourBax {
  width: 100%;
  height: 100%;
  background: url("../../../static/images/four01.jpg");
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

.twoBox {
  width: 100%;
  height: 100%;
  background: url("../../../static/images/two01.gif");
  background-size: 100% 100%;
  position: relative;
}
.tcbox {
  width: 2.5rem;
  height: 0.6rem;
  background: skyblue;
  border: 0.01rem solid transparent;
  border-radius: 0.3rem;
  text-align: center;
  line-height: 0.6rem;
  color: aliceblue;
  position: absolute;
  left: 50%;
  margin-left: -1.25rem;
  top: 70%;
}
.tcbox1 {
  width: 2.5rem;
  height: 0.6rem;
  background: red;
  border: 0.01rem solid transparent;
  border-radius: 0.3rem;
  text-align: center;
  line-height: 0.6rem;
  color: aliceblue;
  position: absolute;
  left: 50%;
  margin-left: -1.25rem;
  top: 80%;
}
</style>