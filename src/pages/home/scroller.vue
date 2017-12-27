<template>
  <div class="index-scroller" ref="scroller">
    <div class="content">
      <transition name="loading">
        <div v-show="isLoading" class="loading">正在加载...</div>
      </transition>
      <div v-for="item of list" class="item" :key="item.id">
        <img v-lazy="item.imgUrl" class="item-img">
        <div class="item-content">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <p class="item-price">
            <span class="price-tag">&yen;</span>
            {{item.price}}
            <span class="price-start">起</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import axios from 'axios'
  import { mapState } from 'vuex'
  export default {
    name: 'index-scroller',
    data () {
      return {
        moreSights: [],
        isLoading: false,
        pageNum: 1
      }
    },
    props: {
      sights: Array
    },
    computed: {
      list () {
        return this.sights.concat(this.moreSights)
      },
      ...mapState(['city'])
    },
    watch: {
      list () {
        this.$nextTick(() => {
          this.scroller.refresh()
        })
      }
    },
    methods: {
      createScroller () {
        this.scroller = new BScroll(this.$refs.scroller, {
          observer: false,
          probeType: 3
        })
      },
      bindEvents () {
        this.scroller.on('scroll', this.handleScroll.bind(this))
        this.scroller.on('scrollEnd', this.handleScrollEnd.bind(this))
      },
      handleScroll (e) {
        if (e.y > 60 && !this.isLoading) {
          this.isLoading = true
          this.getListInfo()
        }
      },
      handleScrollEnd () {
        this.isLoading = false
      },
      getListInfo () {
        axios.get('./api/sightlist.json?city=' + this.city + '&page=' + this.pageNum)
              .then(this.handleGetListSucc.bind(this))
              .catch(this.handleGetListErr.bind(this))
      },
      handleGetListSucc (res) {
        res && (res = res.data)
        if (res.data) {
          if (res.data.list) {
            this.moreSights = this.moreSights.concat(res.data.list)
            this.pageNum += 1
          }
        } else {
          this.handleGetListErr()
        }
      },
      handleGetListErr () {
        console.log('请求失败')
      }
    },
    mounted () {
      this.createScroller()
      this.bindEvents()
    }
  }
</script>

<style scoped lang="stylus">
  @import '../../assets/styles/common/varibles.styl'
  .loading
    line-height: .3rem
    text-align: center
    color: $lightFontColor
  .loading-enter-active, .loading-leave-active
    transition: opacity .5s
  .loading-enter, .loading-leave-to
    opacity: 0
  .item
    display: flex
    padding: .24rem
    .item-img
      width: 1.4rem
      height: 1.4rem
      margin-right: .2rem
    .item-content
      flex: 1
      .item-title
        margin: .04rem 0 .1rem 0
        font-size: .3rem
        color: $fontColor
      .item-desc
        margin-bottom: .1rem
        font-size: .28rem
        color: $lightFontColor
      .item-price
        margin-top: .2rem
        font-size: .36rem
        color: $enlightFontColor
        .price-tag
          font-size: .24rem
        .price-start
          font-size: .24rem
          color: $lightFontColor
</style>
