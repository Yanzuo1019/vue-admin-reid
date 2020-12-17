<template>
  <span class="header">
    <span class="logo"><img src="../assets/logo.png" alt="logo"/></span>
    <span class="title"><strong>ReID后台管理系统(vue-admin-reid)</strong></span>
    <span class="times">{{ this.nowTime }}</span>
  </span>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      nowTime: ""
    };
  },
  mounted() {
    this.currentTime();
  },
  methods: {
    currentTime() {
      setInterval(this.getTime, 500);
    },
    getTime() {
      let yy = new Date().getFullYear();
      let mm = new Date().getMonth() + 1;
      let dd = new Date().getDate();
      let hh = new Date().getHours();
      let mf =
        new Date().getMinutes() < 10
          ? "0" + new Date().getMinutes()
          : new Date().getMinutes();
      let ss =
        new Date().getSeconds() < 10
          ? "0" + new Date().getSeconds()
          : new Date().getSeconds();
      this.nowTime =
        yy + "年" + mm + "月" + dd + "日 " + hh + ":" + mf + ":" + ss;
    }
  }
};
</script>

<style scoped>
.logo img {
  height: 100%;
  vertical-align: middle;
}
.title {
  font-size: 25px;
  position: absolute;
  left: 100px;
}
.times {
  font-size: 25px;
  position: absolute;
  right: 20px;
}
</style>
