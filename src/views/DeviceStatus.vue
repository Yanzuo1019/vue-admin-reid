<template>
  <div class="deviceStatus">
    <div>
      <span>
        <h2 style="display: inline-block">设备状态</h2>

        <!--        <span class="switch" style="display: inline-block">-->
        <!--          <el-switch-->
        <!--            v-model="selection"-->
        <!--            active-color="#13ce66"-->
        <!--            inactive-color="#ff4949"-->
        <!--            @change="DeviceStatus"-->
        <!--          ></el-switch>-->
        <!--          <span>(显示离线设备)</span>-->
        <!--        </span>-->
      </span>

      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="id" label="设备序号"> </el-table-column>
        <el-table-column prop="address" label="IP地址" sortable>
        </el-table-column>
        <el-table-column prop="mac" label="MAC地址" sortable> </el-table-column>
        <el-table-column prop="status" label="运行状态" sortable>
          <template slot-scope="scope">
            <el-tag type="success" v-if="scope.row.status === 1">在线</el-tag>
            <el-tag type="danger" v-if="scope.row.status === 0">离线</el-tag>
          </template>
        </el-table-column>
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
      // selection: true
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
          this.tableData.sort(function(a, b) {
            if (a.id < b.id) return -1;
            else if (a.id > b.id) return 1;
            else return 0;
          });
          // if (!this.selection) {
          //   for (var i = 0; i < this.tableData.length; i++) {
          //     if (this.tableData[i].status === 0) {
          //       this.tableData.splice(i, 1);
          //       i--;
          //     }
          //   }
          // }
        })
        .catch(error => {
          this.$message.error("无法获取设备状态！");
        });
    }
  }
};
</script>

<style>
.switch {
  position: relative;
  left: 20px;
}
</style>
