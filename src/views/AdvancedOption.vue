<template>
  <div class="advancedOption">
    <div>
      <h2>高级选项</h2>
    </div>
    <div style="width: 300px">
      <h3>固件更新</h3>
      <el-upload
        class="upload-demo"
        ref="upload"
        :action="uploadUrl()"
        :auto-upload="false"
        :http-request="submitUpload"
        :limit="1"
      >
        <el-button slot="trigger" size="small" type="primary"
          >选取文件</el-button
        >
        <el-button
          style="margin-left: 10px;"
          size="small"
          type="success"
          @click="buttonTrigger"
          >上传到服务器</el-button
        >
      </el-upload>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    buttonTrigger() {
      this.$refs.upload.submit()
    },
    submitUpload(file) {
      console.log(file)
      this.fileUpload(file)
        .then(response => {
          this.$message.success("文件上传成功！");
        })
        .catch(error => {
          this.$message.error("文件上传失败！");
        });
    },
    uploadUrl() {
      return this.$axios.baseURL + "/Upload";
    },
    fileUpload(fileobj) {
      let param = new FormData();
      param.append("file", fileobj.file);
      console.log(fileobj.file)
      return this.$axios.request({
        method: "post",
        url: "/Upload",
        headers: { "Content-Type": "multipart/form-data" },
        data: param
      });
    }
  }
};
</script>
