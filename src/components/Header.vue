<template>
  <div class="header">
    <!--    <span class="logo"><img src="../assets/logo.png" alt="logo"/></span>-->
    <!--    <span class="title"><strong>ReID后台管理系统(vue-admin-reid)</strong></span>-->
    <span class="times">{{ this.nowTime }}</span>
    <span class="license" v-if="this.license === -1">证书未获取</span>
    <span class="license" v-if="this.license === 1">证书不合格</span>
    <span class="license" v-if="this.license === 2">证书未激活</span>
    <span class="version"
      >版本号: {{ this.serverVersion }} / {{ this.webVersion }}</span
    >
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      nowTime: "",
      serverVersion: "",
      webVersion: "1.1",
      license: -1
    };
  },
  mounted() {
    this.currentTime();
    this.updateVersion();
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
      this.license = Number(localStorage.getItem("license"));
    },
    updateVersion() {
      this.$axios
        .get("/SystemVersion")
        .then(response => {
          this.serverVersion = response.data.ServerVersion;
        })
        .catch(error => {
          this.$message.error("无法获取后端版本号！");
        });
    }
  }
};
</script>

<style scoped>
/*.logo img {*/
/*  height: 100%;*/
/*  vertical-align: middle;*/
/*}*/
/*.title {*/
/*  font-size: 25px;*/
/*  position: absolute;*/
/*  left: 100px;*/
/*}*/
.times {
  font-size: 25px;
  position: absolute;
  left: 20px;
}

.version {
  font-size: 25px;
  position: absolute;
  right: 20px;
}

.license {
  font-size: 25px;
  color: red;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0%);
}
</style>
