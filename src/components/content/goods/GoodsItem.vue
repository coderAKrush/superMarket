<template>
  <div class="gooditem">
    <img :src="item" alt="">
    <div class="Itemtext"><span>第{{num+1}}件货物</span></div>
  </div>
</template>

<script>
export default {
  name: "GoodsItem",
  props: {
    item: {
      type: String,
      default () {
        return ""
      }
    },
    num: {
      type: Number,
      default () {
        return -1
      }
    }
  }
}
</script>

<style scoped>
  .gooditem {
    width: 50%;
  }
  

  .Itemtext {
    text-align: center;
  }
</style>