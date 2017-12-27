<template>
  <div class="header">
    <div class="back iconfont">&#xe624;</div>
    <div class="search">
      <div class="search-content">
        <span class="iconfont search-icon">&#xe632;</span>
        请输入城市/景点/游玩主题
      </div>
    </div>
    <router-link to="/city">
      <div class="city">{{city}}</div>
    </router-link>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: 'index-header',
    computed: {
      ...mapState(['city'])
    }
  }
</script>

<style scoped lang="stylus">
  @import '../../assets/styles/common/varibles.styl'
  .header
    display: flex
    justify-content: space-between
    height: .88rem
    background: $bgColor
    .back 
      width: .8rem
      line-height: .88rem
      text-align: center
      font-weight: 700
      font-size: .44rem
      color: #fff
    .search
      flex: 1
      .search-content
        width: 100%
        line-height: .6rem
        margin-top: .14rem
        background: #fff
        border-radius: .1rem
        text-indent: .2rem
        color: #ccc
        .search-icon
          position: relative
          top: .02rem
    .city
      position: relative
      overflow: hidden
      max-width: 1.6rem
      line-height: .88rem
      padding: 0 .46rem 0 .22rem
      font-size: .28rem
      color: #fff
      white-space: nowrap
      text-overflow: ellipsis
      &::before
        position: absolute
        right: .17rem
        top: .35rem
        content: '\0020'
        width: 0
        height: 0
        border-left: .12rem solid transparent
        border-right: .12rem solid transparent
        border-top: .12rem solid #fff
</style>
