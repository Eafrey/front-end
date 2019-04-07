<template>
    <div>
        <p>创建账户</p>
        <el-steps :active="active" finish-status="success" align-center=true>
            <el-step title="输入基本信息"></el-step>
            <el-step title="确认邮箱"></el-step>
            <el-step title="注册完成"></el-step>
        </el-steps>

        <div :class="$style['basic-info']">
            <div v-if="active==1" >
                <el-form :model="userInfo" label-width="100px" label-position='left' :rules="signUpFormRules" :ref="signUpFormRef">
                    <el-form-item label="用户名" prop="userName">
                        <el-input v-model="userInfo.userName"></el-input>
                    </el-form-item>
                    <el-form-item label="邮箱" prop="mail">
                        <el-input v-model="userInfo.mail"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                        <el-input type="password" v-model="userInfo.password"></el-input>
                    </el-form-item>
                    <el-form-item label="确认密码" prop="repeatedPassword">
                        <el-input type="password" v-model="userInfo.repeatedPassword"></el-input>
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

        <el-button v-loading='isLoading' :class="$style.next" style="margin-top: 12px;" @click="next">下一步</el-button>
    </div>
</template>

<script>
import { addUser } from "../../api/user";

export default {
  name: "Signup",
  data: function() {
    return {
      isLoading: false,
      signUpFormRules: {
        userName: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        mail: [
          {
            required: true,
            validator: this.checkMail,
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            validator: this.checkPassword,
            trigger: "blur"
          }
        ],
        repeatedPassword: [
          {
            required: true,
            validator: this.checkRepeatedPassword,
            trigger: "blur"
          }
        ]
      },
      signUpFormRef: "signUpFormRef",
      active: 1,
      userInfo: {
        userName: "",
        mail: "",
        password: "",
        repeatedPassword: ""
      }
    };
  },
  methods: {
    next() {
      console.log(this.userInfo);
      if (this.active === 1) {
        this.$refs[this.signUpFormRef]
          .validate(valid => {
            if (valid) {
              addUser(this.userInfo).then(data => {
                this.isLoading = false;
                this.active++;
              });
            }
          })
          .catch(res => {
            this.isLoading = false;
          });
      }
    },
    goToLogin() {
      this.$router.push("/login");
    },
    isValidEmail(email) {
      const myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
      return myreg.test(email);
    },
    checkPassword(rule, value, callback) {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (value.length < 6 || value.length > 16) {
        callback(new Error("密码的长度应在6-16位"));
      } else {
        callback();
      }
    },
    checkRepeatedPassword(rule, value, callback) {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.userInfo.password) {
        callback(new Error("两次输入密码不一致"));
      } else {
        callback();
      }
    },
    checkMail(rule, value, callback) {
      if (value === "") {
        callback(new Error("请输入邮箱"));
      } else if (!this.isValidEmail(value)) {
        callback(new Error("邮箱格式不正确"));
      } else {
        callback();
      }
    }
  }
};
</script>

<style module>
.basic-info {
  width: 60%;
  margin: 30px auto;
}
.next {
  margin: 0px auto;
}
</style>

