<template>
  <div class="deviceStatus">
    <div>
      <h2>设备状态</h2>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="id" label="设备序号"> </el-table-column>
      <el-table-column prop="address" label="IP地址"> </el-table-column>
      <el-table-column prop="mac" label="MAC地址"> </el-table-column>
      <el-table-column prop="status" label="运行状态"> </el-table-column>
    </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      timer: null
    };
  },
  mounted() {
    this.DeviceStatus();
    if (this.timer) {
      clearInterval(this.timer);
    } else {
      this.timer = setInterval(() => {
        setTimeout(this.DeviceStatus, 0);
      }, 1000 * 5);
    }
  },
  beforeDestroy() {
    clearInterval(this.timer);
    this.timer = null;
  },
  methods: {
    DeviceStatus() {
      this.$axios
        .get("/DeviceStatus")
        .then(response => {
          this.tableData = JSON.parse(JSON.stringify(response.data.data.dev));
        })
        .catch(error => {
          this.$message.error("无法获取设备状态！");
        });

    }
  }
};
</script>
