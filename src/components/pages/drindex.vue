<template>
  <div class="drindex">
    <el-carousel :interval="3000" type="card" height="5rem" width="3.32rem">
      <el-carousel-item v-for="(item,index) in arr" :key="index">
        <h3 class="medium">
          <img :src="item" alt />
        </h3>
      </el-carousel-item>
    </el-carousel>
    <div class="body">
      <h2 class="shTitle">作品</h2>
      <div class="boxsy">
        <div class="picBox" v-for="(item,idx) in syarr" :key="idx" 
        @touchend='end(item.imgid,idx)'
        @touchmove='move'
        @touchstart='start'
        >
          <div class="picBar">
            <img :src="item.imgurl" alt />
          </div>
          <div class="jindu">
            <van-progress pivot-text="取景" color="#f2826a" :percentage="item.qj" />
            <van-progress pivot-text="构图" color="#ee0a24" :percentage="item.gt" />
            <van-progress
              :percentage="item.bg"
              pivot-text="曝光"
              pivot-color="#7232dd"
              color="linear-gradient(to right, #be99ff, #7232dd)"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="jia"></div>
    <!-- <My-bottom></My-bottom> -->
  </div>
</template>
<script>
import MyBottom from "../views/bottom";
export default {
  components: {
    MyBottom
  },
  data() {
    return {
      arr: [
        "../../../static/images/dr02.jpg",
        "../../../static/images/dr01.jpg",
        "../../../static/images/dr03.jpg",
        "../../../static/images/dr04.jpg"
      ],
      syarr: [
        {
          imgurl: "../../../static/images/dr01.jpg",
          imgid: "01",
          qj:99,
          gt:95,
          bg:85

        },
        {
          imgurl: "../../../static/images/dr02.jpg",
          imgid: "02",
          qj:98,
          gt:90,
          bg:93
        },
        {
          imgurl: "../../../static/images/dr03.jpg",
          imgid: "03",
          qj:100,
          gt:85,
          bg:95
        },
        {
          imgurl: "../../../static/images/dr04.jpg",
          imgid: "04",
          qj:96,
          gt:85,
          bg:85
        }
       
      ]
    };
  },
  methods:{
    start(e){
      this.startY = e.touches[0].clientY;
      this.endY = 0;
      // console.log(e)
    },
    move(e){
    //  console.log(this.endY,'hahah')
      this.endY = e.touches[0].clientY
       
    },
    end(id,idx){
      if(this.endY === 0) this.$router.push(
        // '/drpic/'+ id,
        {
          name:'xiangqing',
          params:{
            imgid:id,
            url:this.syarr[idx].imgurl
          }
        }
      )
    }
  }

};
</script>
<style scoped>
.drindex {
  width: 100%;
  height: 100%;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;

  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.medium {
  height: 5rem;
}
.medium img {
  height: 100%;
  width: 100%;
}
.shTitle {
  font-size: 0.35rem;
  margin-bottom: 0.3rem;
}
.boxsy {
  /* width:100%; */
  width: calc(100% - 0.4rem);
  /* background: cornflowerblue; */
  padding: 0 0.2rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.picBox {
  width: 3.2rem;
  height: 4.5rem;
  background: #ffffff;
  margin-top: 0.2rem;
}

.jia {
  height: 0.95rem;
  /* background: blue; */
}
.picBar {
  width: 2rem;
  height: 2.5rem;
  background: yellow;
  margin: 0.2rem auto 0;
}
.picBar img {
  width: 100%;
  height: 100%;
}
.jindu{
    height:0.8rem;
    width: 2.3rem;
    margin-left:0.4rem;
    margin-top:0.4rem
}
.van-progress{
    margin-bottom:0.35rem
}
</style>