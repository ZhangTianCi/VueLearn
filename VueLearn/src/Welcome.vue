<template>
  <div style="height:100%;width:100%;display:flex;justify-content:center;align-items:center;">
    <el-card class="box-card" shadow="hover" style="width:444px;">
      <div slot="header" class="clearfix">
        <span>简艾·生活</span>
      </div>
      <div class="text item" style="text-align:center;">
        <span>采购数据库整合系统</span>
        <br/>
        <br/>
        <p style="font-size:12px;text-align:right;">
          &copy;2018
          <code title="天津思达锐驰科技有限公司">{{'Stariches'}}</code>
        </p>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
<style>
.box-card .item span {
  animation: change 5s linear 0s infinite;
  font-size: 30px;
  font-weight: 700;
}
@keyframes change {
  0% {
    color: #a1c4fd;
  }
  25% {
    color: #a6c0fe;
  }
  50% {
    color: #e2ebf0;
  }
  75% {
    color: #d4fc79;
  }
  100% {
    color: #8fd3f4;
  }
}
</style>

