<template>
  <div ref="scroller">
    <div class="list">
      <div class="area">
        <div class="title border-topbottom">当前位置</div>
        <div class="content">
          <div class="button" @click="handleCityClick(city)">
            <div class="button-text border button-active">{{city}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="content">
          <div class="button" 
               v-for="item of hotcity"
               :key="item.id" 
               @click="handleCityClick(item.city)">
            <div class="button-text border" 
                 :class="{'button-active': item.city===city}">
                 {{item.city}}
            </div>
          </div>
        </div>
      </div>   
      <div class="area" v-for="(item, key) of list">
        <div class="title border-topbottom">{{key}}</div>
        <div class="content">
          <div class="content-item border-bottom" 
               v-for="innerItem of item"
               @click="handleCityClick(innerItem.name)">
               {{innerItem.name}}
          </div>
        </div>
      </div>    
    </div>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    name: 'city-list',
    props: {
      list: Object,
      hotcity: Array
    },
    computed: {
      ...mapState({
        city (state) {
          return state.city || '北京'
        }
      })
    },
    watch: {
      list () {
        this.$nextTick(() => {
          this.scroll.refresh()
        })
      }
    },
    methods: {
      handleCityClick (city) {
        this.changeCity(city)
        this.$router.push('/')
      },
      ...mapMutations(['changeCity'])
    },
    mounted () {
      this.scroll = new BScroll(this.$refs.scroller)
    }
  }
</script>

<style scoped lang="stylus">
  @import '../../assets/styles/common/varibles.styl'
  .area
    .title
      padding-left: .3rem
      line-height: .54rem
      background: #eee
      color: #616161
      font-size: .26rem
      &::before, &::after
        border-color: #9e9e9e
    .content
      overflow: hidden
      padding: 0 .4rem 0 .2rem
      .button
        float: left
        width: 33.33%
        .button-text
          margin: .2rem
          text-align: center
          line-height: .6rem
          &::before
            border-color: #999
            border-radius: .15rem
        .button-active
          color: $bgColor
          &::before
            border-color: $bgColor
      .content-item
        line-height: .6rem
</style>