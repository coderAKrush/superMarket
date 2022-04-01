<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">鹿鹿Shop</div></nav-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar.vue'
  export default {
    components: { NavBar },
    name: "Home"
  }
</script>

<style scoped>
  .home-nav {
    background-color: var(--color-tint);
    color: white;
  }

</style>
