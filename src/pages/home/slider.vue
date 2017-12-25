<template>
  <swiper class="banner">
    <swiper-slide>I'm Slide 1</swiper-slide>
    <swiper-slide>I'm Slide 2</swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
    <div>1312414</div>
  </swiper>
</template>

<script>
  export default {
    name: 'index-slider'
  }
</script>

<style scoped lang="stylus">
  @import '../../assets/styles/common/varibles.styl'
  .banner
    overflow: hidden
    height: 0
    padding-bottom: 31.25%
    background: red
</style>
