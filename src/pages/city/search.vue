<template>
  <div class="search">
    <input class="search-input" type="text" placeholder="输入城市名或拼音">
  </div>
</template>

<script>
  export default {
    name: 'city-search'
  }
</script>

<style scoped lang="stylus">
  @import '../../assets/styles/common/varibles.styl'
  .search
    height: .74rem
    background: $bgColor
    padding: 0 .2rem
    .search-input
      box-sizing: border-box
      width: 100%
      border-radius: .1rem
      pading: 0 .2rem
      line-height: .62rem   
      text-align: center
      font-size: .24rem
      color: $fontNormalColor
</style>