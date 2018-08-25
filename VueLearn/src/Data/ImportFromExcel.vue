   <template>
  <div style="height:100%;width:100%;display:flex;justify-content:center;align-items:center;">
    <el-card class="box-card" shadow="hover">
      <el-upload class="upload-demo" name="Excel" :before-upload="CheckFileType" accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" drag action="https://jsonplaceholder.typicode.com/posts/">
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或
          <em>点击上传</em>
        </div>
        <div class="el-upload__tip" style="text-align:center" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
    </el-card>
  </div>
</template> 

<script>
export default {
  data() {
    return {};
  },
  methods: {
    CheckFileType(file) {
      if (
        file.type !==
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      ) {
        this.$message.warning({
          dangerouslyUseHTMLString: true,
          message:
            '请选择正确的Excel文件!&nbsp;&nbsp;&nbsp;<strong style="color:#67C23A;">(建议使用模板)</strong>'
        });
        return false;
      }
    }
  }
};
</script>

