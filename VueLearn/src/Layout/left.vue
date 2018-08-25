<template>
    <el-menu class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" style="height:100%;">
        <el-menu-item v-for="(item,index) in $route.meta.menus" :index="index+1" :key="index+1">
            <i class="el-icon-menu"></i>
            <span slot="title">{{item.name}}</span>
        </el-menu-item>
    </el-menu>
</template>
<script>
export default {
  data() {
    return {
      Data: 100,
      msg: "Welcome to Your Top"
    };
  }
};
</script>
