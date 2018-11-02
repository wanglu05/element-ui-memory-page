<template>
  <div>
    <dg-table title="弹窗组件选择数据" :checked-data = "checkedData" @handleChooseData="handleChooseData"></dg-table>
    <br/><br/><br/>
    <el-input type="textarea" :rows="10" placeholder="已选择内容" :value="JSON.stringify(checkedData)">
</el-input>
  </div>
</template>

<script>
import dialogTable from './ChooseDialogTalbe'
export default {
  data() {
    return {
      checkedData: [], // 初始化弹窗选中的行
    };
  },
  methods: { 
    handleChooseData (data) {
      this.$message({  message: `已经选择了${data.length}条数据！`, type: 'success' });
      this.checkedData = data;
    }
  },
  components: {
    "dgTable": dialogTable// require("./dialogTable.vue")
  },
  mounted: function() {
    this.$nextTick(function () {
          // 模拟初始化一个选中
          this.checkedData = [{personId:2}]
     })
  }
}
</script>