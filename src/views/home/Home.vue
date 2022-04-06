<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">鹿鹿Shop</div></nav-bar>
    <home-swiper :banners="banners"/>
    <recommend-view :recommends="recommends" :recommendsText="recommendsText"/>
    <feature-view/>
    <tab-control class="tab-Control" :titles="titles" @itemClick="itemClick" />
    <goods-list :goods="goods[currentType].list"/>
    <ul>
      <li>列表1</li>
      <li>列表2</li>
      <li>列表3</li>
      <li>列表4</li>
      <li>列表5</li>
      <li>列表6</li>
      <li>列表7</li>
      <li>列表8</li>
      <li>列表9</li>
      <li>列表10</li>
      <li>列表1</li>
      <li>列表2</li>
      <li>列表3</li>
      <li>列表4</li>
      <li>列表5</li>
      <li>列表6</li>
      <li>列表7</li>
      <li>列表8</li>
      <li>列表9</li>
      <li>列表10</li>
      <li>列表1</li>
      <li>列表2</li>
      <li>列表3</li>
      <li>列表4</li>
      <li>列表5</li>
      <li>列表6</li>
      <li>列表7</li>
      <li>列表8</li>
      <li>列表9</li>
      <li>列表10</li>
      <li>列表1</li>
      <li>列表2</li>
      <li>列表3</li>
      <li>列表4</li>
      <li>列表5</li>
      <li>列表6</li>
      <li>列表7</li>
      <li>列表8</li>
      <li>列表9</li>
      <li>列表10</li>
      <li>列表1</li>
      <li>列表2</li>
      <li>列表3</li>
      <li>列表4</li>
      <li>列表5</li>
      <li>列表6</li>
      <li>列表7</li>
      <li>列表8</li>
      <li>列表9</li>
      <li>列表10</li>
      <li>列表1</li>
      <li>列表2</li>
      <li>列表3</li>
      <li>列表4</li>
      <li>列表5</li>
      <li>列表6</li>
      <li>列表7</li>
      <li>列表8</li>
      <li>列表9</li>
      <li>列表10</li>
      <li>列表1</li>
      <li>列表2</li>
      <li>列表3</li>
      <li>列表4</li>
      <li>列表5</li>
      <li>列表6</li>
      <li>列表7</li>
      <li>列表8</li>
      <li>列表9</li>
      <li>列表10</li>
    </ul>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar.vue'
  import HomeSwiper from './childComps/HomeSwiper.vue'
  import RecommendView from './childComps/RecommendView.vue'
  import FeatureView from './childComps/FeatureView.vue'
  import getPicture from 'components/common/mock/mocks'
  import TabControl from 'components/content/tabControl/TabControl.vue'
  import GoodsList from '../../components/content/goods/GoodsList.vue'

  export default {
    components: { 
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView,
      TabControl,
      GoodsList,
    },
    name: "Home",
    data() {
      return {
        index: 0,
        banners: getPicture('300x150', 5),
        recommends: getPicture('300x150', 4),
        recommendsText: ["1", "2", "3", "4"],
        titles: ["销量", "折扣", "最新"],
        goods: {
          'sell': {list: getPicture('200x200', 10)},
          'discount': {list: getPicture('200x200', 10)},
          'latest': {list: getPicture('200x200', 10)}
        },
        currentType: 'sell'
      }
    },
    methods: {
      itemClick(index) {
        switch(index) {
          case 0:
            this.currentType = 'sell';
            break;
          case 1:
            this.currentType = 'discount';
            break;
          case 2:
            this.currentType = 'latest';
            break;
        }
      }
    }
  }
</script>

<style scoped>
  /* #home {
    padding-top: 44px;
  } */
  .home-nav {
    background-color: var(--color-tint);
    color: white;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 1;
  }
  .tab-Control {
    position: sticky;
    top: 44px;
  }

</style>
