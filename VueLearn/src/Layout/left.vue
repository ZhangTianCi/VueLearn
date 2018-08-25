<template>
  <el-menu class="el-menu-vertical-demo" @select="HandleSelect" background-color="#425066" text-color="#fff" active-text-color="#fffbf0" style="height:100%;">
    <el-menu-item v-for="(item,index) in $route.meta.menus" :index="item.routeName" :key="index+1">
      <i class="el-icon-caret-right"></i>
      <span slot="title">{{item.name}}</span>
    </el-menu-item>
  </el-menu>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    HandleSelect(key, keyPath) {
      console.log({ name: key });
      this.$router.replace({ name: key, params: {} });
    }
  }
};
</script>
