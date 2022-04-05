<template>
  <div class="goods">
    <goods-item v-for="(item, index) in goods" :key="index" :item = item :num="index" class="gooditem"></goods-item>
  </div>
</template>

<script>
import GoodsItem from './GoodsItem.vue'

export default {
  components: { GoodsItem },
  name: "GoodsList",
  props: {
    goods: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>
<style scoped>
  .goods {
    display: flex;
    flex-wrap: wrap;
  }
</style>