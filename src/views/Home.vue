<template>
<div class="container">
    <div>
        <div>Welcome to Eafrey.cn</div>
        <el-button @click=testEafreyCN>testApi</el-button>
        <div>{{ testContent }}</div>
    </div>
</div>
</template>

<script>
import { testApi } from "../api/user";

export default {
  name: "Home",
  data: function() {
    return { testContent: "original text" };
  },
  methods: {
    goToLogin() {
      this.$router.push("/signup");
    },
    testEafreyCN() {
      testApi().then((data) => {
        this.testContent = data;
      });
    }
  }
};
</script>

<style lang="scss">
  .container {
    opacity: 0.9;
    background-image: url(../assets/background.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
  }
</style>
