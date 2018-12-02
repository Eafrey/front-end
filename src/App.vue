<template>
  <div id="app">
    <noscript></noscript>
    <p>Welcome to Eafrey.cn</p>
    <router-link to="/">Home</router-link> |     
    <router-link to="/login">Log in</router-link> | 
    <router-link to="/signup">Sign up</router-link>   
    <router-view></router-view> 
    <br>
    <button @click=testEafreyCN>testApi</button>
    <p>{{ testContent }}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "app",
  components: {},
  data: function() {
    return { testContent: "original text" };
  },
  methods: {
    testEafreyCN() {
      console.log("clicking");
      axios.get("/api/test").then(({ data }) => {
        console.log('testing test api')
        this.testContent = data;
      });
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
