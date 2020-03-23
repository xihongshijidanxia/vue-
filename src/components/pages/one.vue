<template>
  <div class="oneBar">
    <transition enter-active-class="animated flipInX">
      <div class="oneBox" v-show="isshow">
        <div class="ctxt">
          <transition enter-active-class="animated bounceInRight">
            <div class="sCtxt" v-show="isshows">
                <div class="txt">为了梦想无暇顾及窗外雾霾得你</div>
            </div>
          </transition>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  mounted() {
    // this.isshow = !this.isshow;
    // // this.isshow = true;
    // if(this.isshow === true){
    //     var that = this
    //     console.log(that,'试验')
    //     setTimeout(function(){
    //         that.isshows = true
    //     },1500);

    // }
    var promise1 = new Promise((res,rej)=>{
        res()
    })
    var promise2 = new Promise((res,rej)=>{
        res()
    })
     var promise3 = new Promise((res,rej)=>{
        res()
    })
    promise1.then(res=>{
      this.isshow = !this.isshow;
      return promise2
    }).then(res=>{
      setTimeout(()=>{
        this.isshows = true
      },1500)
      return promise3
    }).then(res=>{
       setTimeout(()=>{
        this.$router.push('/two') 
      },4500)
    })

  },
  // watch: {
  //   isshows: {
  //     handler: function() {
  //       var that = this
  //       setTimeout(function() {
  //         that.$router.push('/two') 
  //       }, 3000)
  //     },
  //     deep: true
  //   } 
  // },
  data() {
    return {
      haha:'nihao',
      isshow: false,
      isshows: false
    };
  }
};
</script>
<style scoped>
.oneBar {
  width: 100%;
  height: 100%;
}
.oneBox {
  width: 100%;
  height: 100%;
  background: url("../../../static/images/one1.jpg");
  background-size: 100% 100%;
  position: relative;
}
.ctxt {
  width: 3rem;
  height: 1.5rem;
  border: 0.01rem solid #6a77a2;
  background: #6a77a2;
  border-radius: 0.75rem;
  z-index: 22;
  position: absolute;
  top: 1.6rem;
  left: 4rem;
  overflow: hidden;
}
.sCtxt {
  width: 100%;
  height: 100%;
}
.txt{
    width:2rem;
    height: 1rem;
    color: aliceblue;
    margin: 0.3rem 0.5rem ;
    font-size: 0.18rem;
    line-height: 0.34rem;
}
</style>