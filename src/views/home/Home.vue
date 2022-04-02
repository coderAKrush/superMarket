<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">鹿鹿Shop</div></nav-bar>
    <home-swiper :banners="banners"/>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar.vue'
  import HomeSwiper from './childComps/HomeSwiper.vue'
  import getPicture from './mocks'

  export default {
    components: { 
      NavBar,
      HomeSwiper 
    },
    name: "Home",
    data() {
      return {
        banners: getPicture(5),
        recommends: []
      }
    }
  }
</script>

<style scoped>
  .home-nav {
    background-color: var(--color-tint);
    color: white;
  }

</style>
