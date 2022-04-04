<template>
  <div class="recommend">
    <div v-for="(item, index) in recommends" :key="index" class="recommend-item">
      <img :src="item" alt="">
      <div>{{recommendsText[index]}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      }
    },
    recommendsText: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
  .recommend {
    display: flex;
  }
  .recommend-item {
    flex: 1;
    text-align: center;
  }
  .recommend-item img {
    width: 85px;
    height: 85px;
    border-radius: 50%;
  }
</style>