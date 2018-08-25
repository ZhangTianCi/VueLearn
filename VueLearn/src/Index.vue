<template>
    <el-container style="height:100%;">
        <el-header style="padding-left:0;">
            <LayoutTop></LayoutTop>
        </el-header>
        <el-container style="height:100%;">
            <el-aside width="200px">
                <LayoutLeft></LayoutLeft>
            </el-aside>
            <el-main>
                <div style="width:100%;height:100%;overflow:auto;">
                    <LayoutMain></LayoutMain>
                </div>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import LayoutTop from "./Layout/Top.vue";
import LayoutLeft from "./Layout/Left.vue";
import LayoutMain from "./Layout/Main.vue";
export default {
  components: { LayoutTop, LayoutLeft, LayoutMain },
  data() {
    return {};
  }
};
</script>

