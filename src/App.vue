<template>
  <div id="app">
    <noscript></noscript>
    <el-menu background-color="#00BFFF" mode="horizontal" router=true text-color='#FFF'>
      <el-menu-item index="/">Home</el-menu-item>
      <el-menu-item index="/login">Login</el-menu-item>
      <el-menu-item index="/Signup">Signup</el-menu-item>
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
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
p {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
</style>
