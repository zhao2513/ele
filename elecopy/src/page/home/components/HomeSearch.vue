<template>
  <div class="search">
    <div class="search-content" @click="toSearch">搜索饿了么商家、商品名称</div>
  </div>
</template>

<script>
export default {
  name: 'search',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods :{
    toSearch(){
      this.$router.push('/search')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="stylus">
.search
  background-image: linear-gradient(90deg,#0af,#0085ff);
  padding: 0px 15px 8px;
  .search-content
    font-size: 15px;
    background: #fff;
    height: .8rem;
    line-height: .8rem;
    text-align: center;
    color:#999;
</style>
