

<template>
  <div>
    <el-menu class="el-menu-demo" mode="horizontal" background-color="rgb(39,53,67)" text-color="#fff" active-text-color="rgb(51,136,255)">
      <el-menu-item>
        <img style="height:100%" src="../assets/logo.png">
      </el-menu-item>
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3" disabled>消息中心</el-menu-item>
      <el-menu-item index="4">
        <a href="https://www.ele.me" target="_blank">订单管理</a>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: "Layout_Top",
  data() {
    return {
      Data: 100,
      msg: "Welcome to Your Top"
    };
  }
};
</script>
