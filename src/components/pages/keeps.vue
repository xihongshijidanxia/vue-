<template>
  <div>
    <div>{{num}}</div>
    <button @click="haha">+</button>
    <div class="tem-flex">
      <div class="tem-list" v-for="(item,idx) in len" :key="idx">列表</div>
      <div class="list" v-for="(item,index) in (row-len%row)" :key="index" v-show="len%row > 0"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      num: 10,
      len: 18,
      row: 3
    };
  },
  methods: {
    haha() {
      this.num += 10;
    }
  }
};
</script>
<style scoped>
.tem-flex {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  justify-items: center;
  text-align: justify;
}
.list {
  content: "";
  width: 25%;
  border: 1px solid transparent;
  padding: 5px;
  overflow: hidden;
}
.tem-list {
  width: 25%;
  border: 1px solid #ff6600;
  margin-bottom: 10px;
  padding: 10px 5px;
  display: flex;
  justify-content: center;
}
</style>