<template>
  <el-container class="home">
    <el-header>
      <Header />
    </el-header>
    <el-container>
      <el-aside width="200px">
        <Aside />
      </el-aside>
      <el-main>
        <Main />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Main from "../components/Main";
import Aside from "../components/Aside";
import Header from "../components/Header";

export default {
  name: "Home",
  components: {
    Main,
    Aside,
    Header
  }
};
</script>

<style scoped>
.el-container {
  height: 100%;
  width: 100%;
}
.el-header {
  line-height: 60px;
  background-color: #24292e;
  color: #ffffff;
}
.el-aside {
  height: 100%;
  background-color: #24292e;
}
</style>
