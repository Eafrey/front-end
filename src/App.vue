<template>
  <div id="app">
    <noscript></noscript>
    <Header/>
  </div>
</template>

<script>
import Header from "./views/layout/Header.vue"

export default {
  name: "app",
  components: {
    Header,
  },
  methods: {}
};
</script>

<style lang="scss">
html {
  height: 100%;

  body {
    height: 100%;
    margin: 0;
  }

  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
    color: $color-text-primary;
  }

  p {
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  }

}


</style>
