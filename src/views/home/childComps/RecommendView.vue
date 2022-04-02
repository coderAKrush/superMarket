<template>
  <div class="recommend">
    <div v-for="(item, index) in recommends" :key="index">
      <img :src="item.img" alt="">
      <div>{{item.title}}</div>
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
    }
  }
}
</script>