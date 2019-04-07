<template>
<div>
    <p>Welcome to Eafrey.cn</p>
    <el-button @click=goToLogin>No account? Go to Sign up.</el-button>
    <div>
        <br>    
        <el-button @click=testEafreyCN>testApi</el-button>
        <p>{{ testContent }}</p>
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
