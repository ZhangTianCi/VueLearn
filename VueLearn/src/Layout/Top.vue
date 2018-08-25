

<template>
  <el-container style="height:100%;">
    <el-aside style="height:100%;width:60px;background-color:#41555d;padding-left:10px;">
      <div :style="{width:'100%',height:'100%',  backgroundColor:'#41555d', backgroundImage:'url(' + Log + ')', backgroundRepeat:'no-repeat', backgroundPosition:'center center', backgroundSize: 'contain'}"></div>
    </el-aside>
    <el-main style="padding:0;height:100%;">
      <el-menu style="height:100%;" class="el-menu-demo" @select="HandleSelect" mode="horizontal" menu-trigger="click" background-color="#41555d" text-color="#fff" active-text-color="rgb(51,136,255)">
        <el-menu-item index="Welcome">首页</el-menu-item>
        <el-menu-item index="ProductBrowse">产品中心</el-menu-item>
        <el-menu-item index="StatisticsCategory">数据统计</el-menu-item>
        <el-menu-item index="SystemCategory">系统设置</el-menu-item>
        <el-submenu index="4">
          <template slot="title">Excel</template>
          <el-menu-item index="ImportDataFromExcel">导入数据</el-menu-item>
          <el-menu-item index="DownloadExcelTemplate">模板下载</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-main>
  </el-container>
</template>
<script>
export default {
  name: "Layout_Top",
  data() {
    return {
      Log: require("../assets/logo.png")
    };
  },
  methods: {
    HandleSelect(key, keyPath) {
      if (key === "DownloadExcelTemplate") {
      } else this.$router.replace({ name: key, params: {} });
    }
  }
};
</script>
