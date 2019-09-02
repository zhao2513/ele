<template>
  <div class="hello">
    <div class="content-font">大润发(海城店)</div>
  </div>
</template>

<script>
export default {
  name: 'homeheader',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.hello{
    background-image: linear-gradient(90deg,#0af,#0085ff);
    padding: 15px 15px;
    font-weight: 700;
    color: #fff
  }
  .content-font{
      font-size: 17px;
  }
</style>
