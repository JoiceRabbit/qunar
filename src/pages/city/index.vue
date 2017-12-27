<template>
  <div class="main">
    <city-header></city-header>
    <city-search></city-search>
    <list class="list"></list>
  </div>
</template>

<script>
  import CityHeader from './header'
  import CitySearch from './search'
  import List from './list'
  export default {
    name: 'city',
    components: {
      CityHeader,
      CitySearch,
      List
    },
    created () {
      //ajax请求城市页信息
    }
  }
</script>

<style scoped lang="stylus">
  .main
    display: flex
    flex-direction: column
    position: relative
    top: 0
    left: 0
    right: 0
    bottom: 0
    .list
      flex: 1
</style>