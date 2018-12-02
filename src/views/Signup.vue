<template>
    <div>
        <p>创建账户</p>
        <el-steps :active="active" finish-status="success" align-center=true>
            <el-step title="输入基本信息"></el-step>
            <el-step title="确认邮箱"></el-step>
            <el-step title="注册完成"></el-step>
        </el-steps>

        <div id="basic-info">
            <div v-if="active==1" >
                <el-form label-width="100px" label-position='left'>
                    <el-form-item label="用户名">
                        <el-input v-model="userInfo.userName"></el-input>
                    </el-form-item>
                    <el-form-item label="邮箱">
                        <el-input v-model="userInfo.eMail"></el-input>
                    </el-form-item>
                    <el-form-item label="密码">
                        <el-input type="password" v-model="userInfo.password"></el-input>
                    </el-form-item>
                    <el-form-item label="确认密码">
                        <el-input type="password" v-model="userInfo.checkPassword"></el-input>
                    </el-form-item>
                </el-form>
            </div>
            <div v-else-if="active==2">
                <p>确认邮件已经发送到您的邮箱，请登录邮箱并点击确认连接。</p>
            </div>
            <div v-else>
                <p>恭喜您，您已完成账号的注册！</p>
                <el-button @click=goToLogin>去登录</el-button>
            </div>
        </div>

        <el-button id='next' style="margin-top: 12px;" @click="next">下一步</el-button>
    </div>
</template>

<script>
export default {
  name: "Signup",
  data: function() {
    return {
      active: 1,
      userInfo: {
        userName: "",
        eMail: "",
        password: "",
        checkPassword: ""
      }
    };
  },
  methods: {
    next() {
      console.log(this.userInfo);
      this.active++;
    },
    goToLogin() {
      this.$router.push("/login");
    }
  }
};
</script>

<style scoped>
#basic-info {
  width: 33%;
  margin: 30px auto;
}
#next {
  margin: 0px auto;
}

</style>

