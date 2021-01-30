<template>
  <div class="nav">
    <el-menu
      default-active="/Home/DeviceStatus"
      class="el-menu-vertical-demo"
      background-color="#24292E"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
    >
      <!--      <el-menu-item index="/Home/HomePage">-->
      <!--        <i class="el-icon-s-home"></i>-->
      <!--        <span>首页</span>-->
      <!--      </el-menu-item>-->
      <el-menu-item index="/Home/DeviceStatus">
        <i class="el-icon-menu"></i>
        <span>设备状态</span>
      </el-menu-item>
      <el-menu-item index="/Home/AdvancedOption">
        <i class="el-icon-setting"></i>
        <span>高级选项</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
