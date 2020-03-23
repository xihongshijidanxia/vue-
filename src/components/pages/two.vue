<template>
  <div class="twoBar">
    <transition enter-active-class="animated flipInX">
      <div class="twoBox" v-show="isshow">
        <transition enter-active-class="animated rubberBand">
          <div class="nolikeBox" v-show="nolikeBoxShow">
            好小子!这个仇西红柿还有20秒就记下来了,现在点喜欢还来得及呦
            <br />
            <span class="num">倒计时开始:{{num}}</span>
          </div>
        </transition>
        <transition enter-active-class="animated zoomInRight">
          <div class="tcbox" v-show="tcboxShow" @touchstart="like">喜欢</div>
        </transition>
        <transition enter-active-class="animated zoomInLeft">
          <div class="tcbox1" v-show="tcbox1Show" @touchstart="nolike">不喜欢</div>
        </transition>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  mounted() {
    this.isshow = !this.isshow;
    if (this.isshow === true) {
      var that = this;
      setTimeout(function() {
        that.tcboxShow = true;
        that.tcbox1Show = true;
      }, 1500);
    }
  },
  watch: {
    nolikeBoxShow: {
      handler: function() {
        var that = this;
        var timer = setInterval(function() {
          that.num= that.num-1
          console.log( that.num)
          if(that.num===0){
              that.num = 0
              clearInterval(timer)
              
          }
        }, 1000);
      },
      deep: true
    }
  },
  methods: {
    like() {
    //   console.log("haha");
         this.$router.push('/three')
    },
    nolike() {
      this.nolikeBoxShow = true;
      console.log(this.nolikeBoxShow);
    }
  },
  data() {
    return {
      isshow: false,
      tcboxShow: false,
      tcbox1Show: false,
      nolikeBoxShow: false,
      num: 20
    };
  }
};
</script>
<style scoped>
.twoBar {
  width: 100%;
  height: 100%;
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
.nolikeBox {
  width: 2.5rem;
  height: 1.3rem;
  margin: 0 auto;
  background: slateblue;
  z-index: 55;
  border: 0.01rem solid transparent;
  border-radius: 0.3rem;
  padding: 0.5rem;
  color: snow;
}
.num{
    color:violet
}
</style>