<template>
  <div class="login-container">
    <div class="login-form">
      <strong>ReID后台管理系统</strong>
      <el-form :model="loginModel" :rules="loginRule">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="loginModel.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            v-model="loginModel.password"
            type="password"
            show-password
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" v-on:click="Login">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      loginModel: {
        username: "",
        password: ""
      },
      loginRule: {
        username: [
          { required: true, message: "用户名为必填项", trigger: "blur" },
          { pattern: /^\w+$/, message: "不能包含特殊字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "密码为必填项", trigger: "blur" },
          { pattern: /^\w+$/, message: "不能包含特殊字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    Login() {
      this.$axios
        .post("/Login", {
          username: this.loginModel.username,
          password: this.loginModel.password
        })
        .then(response => {
          localStorage.setItem("username", this.loginModel.username);
          localStorage.setItem("token", response.data.data.token);
          this.$message.success("登录成功");
          this.$router.push("/Home/HomePage");
        })
        .catch(error => {
          this.$message.error("登录失败");
        });
    }
  }
};
</script>

<style scoped>
.login-container {
  width: 100%;
  height: 100%;
  background: url("../assets/Login.jpg");
  background-size: cover;
  color: black;
  text-align: center;
  font-size: 25px;
}

.login-form {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid #dcdfe6;
  width: 350px;
  padding: 35px 35px 15px 35px;
  border-radius: 5px;
  box-shadow: 0 0 25px #909399;
  background: white;
}
</style>
