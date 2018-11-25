<template>
  <div id="app">
    <p>ddddd</p>
    <noscript></noscript>
    <button @click=testEafreyCN>testApi</button>
    <p>{{ testContent }}</p>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import axios from "axios";

export default {
  name: "app",
  components: {
    HelloWorld
  },
  data: function() {
    return { testContent:  'nullll' };
  },
  methods: {
    testEafreyCN() {
      console.log('clicking')
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
