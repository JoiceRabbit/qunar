<template>
  <div>
    <div class="search">
      <input class="search-input" type="text" placeholder="输入城市名或拼音" @input="handleInputChange">
    </div>
    <div class="search-list" v-show="showList" ref="list">
      <ul>
        <li class="search-item border-bottom" v-for="item of filterResult">{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: 'city-search',
    data () {
      return {
        showList: false,
        filterResult: []
      }
    },
    props: {
      list: Object
    },
    computed: {
      result () {
        const result = []
        for (let i in this.list) {
          this.list[i].forEach((value) => {
            result.push({
              name: value.name,
              spell: value.spell
            })
          })
        }
        return result
      }
    },
    watch: {
      filterResult () {
        this.$nextTick(() => {
          this.scroll.refresh()
        })
      }
    },
    methods: {
      handleInputChange (e) {
        const inputValue = e.target.value.toLowerCase()
        if (inputValue) {
          this.showList = true
          this.filterResult = this.result.filter((item) => {
            if (item.spell.indexOf(inputValue) > -1 || item.name.indexOf(inputValue) > -1) {
              return true
            }
          })
        } else {
          this.showList = false
        }
      }
    },
    mounted () {
      this.scroll = new BScroll(this.$refs.list)
    }
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
  .search-list
    z-index: 1
    overflow: hidden
    position: absolute
    top: 1.62rem
    right: 0
    bottom: 0
    left: 0
    background: #f5f5f5
    .search-item
      padding-left: .2rem
      line-height: .8rem
      background: #fff
      color: #333
</style>