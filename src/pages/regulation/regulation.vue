<template>
   <div class='regulation'>
        <div class='regulation_title'>评比分析班级等级设定</div>
        <div class='btn_box'>
            <el-button type="primary" icon="el-icon-edit" size='small' @click='dialogTableVisible=true' >编辑</el-button>
        </div>
        <div class='progess'>
            <p class='pro_item' :style='{width:pre+"%",background:"#409EFF"}' ></p>
            <p class='pro_item' :style='{width:good+"%",background:"#67C23A"}'></p>
            <p class='pro_item' :style='{width:base+"%",background:"#E6A23C"}'></p>
            <p class='pro_item' :style='{width:bad+"%",background:"#F56C6C"}'></p>
        </div>
        <div class='re_box'>
            <div class='regulation_list' :style='{width:pre+"%"}' >
                <span class='regulation_label'>优秀</span>
                <div class='inner'> 【{{ruleForm.perfect}}%】 </div>
            </div>
            <div class='regulation_list' :style='{width:good+"%"}'>
                <span class='regulation_label'>较好</span>
                <div class='inner'> 【{{ruleForm.good}}%】 </div>
            </div>
            <div class='regulation_list' :style='{width:base+"%"}'>
                <span class='regulation_label'>一般</span>
                <div class='inner'> 【{{ruleForm.base}}%】 </div>
            </div>
            <div class='regulation_list' :style='{width:bad+"%"}'>
                <span class='regulation_label'>较差</span>
                <div class='inner'> 【{{ruleForm.bad}}%】 </div>
            </div>
        </div>
         <el-dialog title="评比等级设定" :visible.sync="dialogTableVisible" center :show-close='false' :close-on-click-modal='false'>
            <el-form ref="ruleForm" :model="ruleForm" label-width="160px">
                    <el-form-item label="优秀">
                        <el-input v-model="ruleForm.perfect" placeholder="列如：0-25" ></el-input>
                    </el-form-item>
                    <el-form-item label="较好">
                        <el-input v-model="ruleForm.good" placeholder="列如：25-50"></el-input>
                    </el-form-item>
                    <el-form-item label="一般">
                        <el-input v-model="ruleForm.base" placeholder="列如：50-75"></el-input>
                    </el-form-item>
                    <el-form-item label="较差">
                        <el-input v-model="ruleForm.bad" placeholder="列如：75-100"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" size='medium' @click='submitName'>保存</el-button>
                        <el-button size='medium'  @click='close'>取消</el-button>
                    </el-form-item>
            </el-form>
        </el-dialog>
   </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {
        ruleForm:{
            perfect:'0-25',
            good:'25-50',
            base:'50-75',
            bad:'75-100'
        },
        dialogTableVisible:false
    }
  },
  components: {},
  computed: {
      pre:function(){
        var pres = this.ruleForm.perfect.split('-')
        return Number(pres[1])- Number(pres[0])
      },
      good:function(){
        var goods = this.ruleForm.good.split('-')
        return Number(goods[1])- Number(goods[0])
      },
      base:function(){
        var bases = this.ruleForm.base.split('-')
        return Number(bases[1])- Number(bases[0])
      },
      bad:function(){
        var bads = this.ruleForm.bad.split('-')
        return Number(bads[1])- Number(bads[0])
      }
   
  },
  beforeMount () {},
  mounted () {
  },
  methods: {
        submitName(e){
            this.dialogTableVisible = false
        },
        close(){
            this.ruleForm = {
                perfect:'0-25',
                good:'25-50',
                base:'50-75',
                bad:'75-100'
            },
             this.dialogTableVisible = false
        }
  },
  watch: {}
}
</script>
<style>
.regulation{
    padding:20px;
}
.regulation_title{
    font-size:16px;
    font-weight:bold;
    margin-bottom:20px;
    text-align: center;
}
.progess{
    width:80%;
    height:12px;
    margin:0 auto;
    border-radius:20px;
    background:#EBEEF5;
    display: flex;
    align-items: center;
    overflow: hidden;
}
.pro_item{
    height:100%;
}
.btn_box{
    width:80%;
    margin:0 auto;
    display: flex;
    justify-content: flex-end;
    margin-bottom:20px;
}
.re_box{
    width:80%;
    margin:0 auto;
    display: flex;
    align-items: center;
}
.regulation_list{
    display: flex;
    align-items: center;
    margin-bottom:10px;
    justify-content: center;
}
.regulation_label{
    font-size:16px;
    color:#444;
    margin-right:10px;
}
.inner{
    font-size:12px;
    color:#1890FF;
}
</style>
