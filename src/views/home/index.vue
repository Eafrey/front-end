<template>
<div class="container">
    <div class='debug-info'>
        <Button @click=testEafreyCN>testApi1</Button>
        <div>{{ testContent }}</div>
    </div>
</div>
</template>

<script>
import { testApi } from "@/api/testApi";

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
    // opacity: 0.9;
    // background-image: url(../assets/background.jpg);
    // background-repeat: no-repeat;
    // background-size: cover;
    // height: 100%;

    .debug-info {
      display: flex;
      align-items: flex-end;
      text-align: right;
      height: 100%;
    }
  }
</style>
