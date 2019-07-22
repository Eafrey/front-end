<template>
  <div id="app">
    <noscript></noscript>
    <el-menu background-color="#00BFFF95" mode="horizontal" router=true text-color='#FFF'>
      <el-menu-item index="/">Home</el-menu-item>
    </el-menu>
    <router-view></router-view> 
   
  </div>
</template>

<script>

export default {
  name: "app",
  components: {},
  methods: {}
};
</script>

<style>
html {
  height: 100%;
}

body {
  height: 100%;
  margin: 0;
}

.el-menu.el-menu--horizontal {
    border-bottom: none !important;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  opacity: 0.9;
  background-image: url(./assets/background.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}

p {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
</style>
