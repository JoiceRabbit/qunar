<template>
  <div>
    <index-header></index-header>
    <slider></slider>
  </div>
</template>

<script>
  import IndexHeader from './header'
  import Slider from './slider'
  import axios from 'axios'
  export default {
    name: 'index',
    
    data () {
      return {
        sliders: []
      }
    },

    components: {
      IndexHeader,
      Slider
    },

    methods: {
      getIndexData () {
        axios.get('/api/index.json')
          .then(this.handleDataSucc.bind(this))
          .catch(this.handleDataError.bind(this))
      },

      handleDataSucc (res) {
        const res = res.data;
        if(res && res)
      },

      handleDataError () {

      }
    },

    mounted () {
      this.getIndexData()
    }
  }
</script>

<style scoped lang="stylus">
</style>
