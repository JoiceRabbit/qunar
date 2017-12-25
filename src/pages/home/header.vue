<template>
  <div class="header">
    <div class="back"></div>
    <div class="search">请输入城市/景点/游玩主题</div>
    <div class="city"></div>
  </div>
</template>

<script>
  export default {
    name: 'index-header'
  }
</script>

<style scoped lang="stylus">
  @import '../../assets/styles/common/varibles.styl'
  .header
    display: flex
    height: .88rem
    background: $bgColor
</style>
