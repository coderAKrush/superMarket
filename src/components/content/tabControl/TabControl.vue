<template>
  <div class="tabControl">
     <div v-for="(item, index) in titles" :key="index" :class="{active: index === currentIndex}" @click="itemClick(index)"> 
       <span>{{item}}</span>
     </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit('itemClick', index);
    }
  }
}
</script>

<style scoped>
  .tabControl {
    display: flex;
    background-color: #fff;
  }
  .tabControl div {
    text-align: center;
    flex: 1;
    height: 40px;
    line-height: 40px;
  }
  .active {
    color: var(--color-high-text);
  }
  .active span {
    border-bottom: 3px solid var(--color-high-text);
    padding: 5px;
  }
</style>