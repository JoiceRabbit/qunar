<template>
  <swiper class="banner index-banner" :options="swiperOption">
    <swiper-slide v-for="item of sliders" :key="item.id">
      <img :src="item.imgUrl" class="banner-img">
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script>
  export default {
    name: 'index-slider',

    props: {
      sliders: Array
    },

    data () {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          loop: true,
          speed: 3000
        }
      }
    }
  }
</script>

<style scoped lang="stylus">
  @import '../../assets/styles/common/varibles.styl'
  .banner >>> .swiper-pagination-bullet
    background: #fff
  .banner
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 31.25%
    .banner-img
      width: 100%
</style>
