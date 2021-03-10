<template>
   <div class='newCollect newCompare'>
       <el-page-header @back="goBack" content="新建字典"></el-page-header>
       <div class='nav'>
           <div :class="['nav_list',nav_active==1?'active':'']" @click="navTab(1)" >学生</div>
           <el-divider direction="vertical"></el-divider>
           <div :class="['nav_list',nav_active==2?'active':'']"  @click="navTab(2)">教师</div>
           <el-divider direction="vertical"></el-divider>
           <div :class="['nav_list',nav_active==3?'active':'']"  @click="navTab(3)">领导</div>
       </div>
       <el-form ref="ruleForm" :model="ruleForm" label-width="160px">
            <el-form-item label="指标类型">
                <el-radio-group v-model="ruleForm.type1">
                    <el-radio label="基础型"></el-radio>
                    <el-radio label="累积型"></el-radio>
                    <el-radio label="动态型"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="标题">
                <el-input v-model="ruleForm.title" maxlength="20" show-word-limit></el-input>
            </el-form-item>
            <el-form-item label="指标类型">
                <el-radio-group v-model="ruleForm.type2">
                    <el-radio label="文本"></el-radio>
                    <el-radio label="单选"></el-radio>
                    <el-radio label="多选"></el-radio>
                    <el-radio label="时间选择器"></el-radio>
                </el-radio-group>
            </el-form-item>
             <el-form-item label="类型内容" v-if='ruleForm.type1 == "基础型"' >
                 <div class='base_list' v-for='(item,index) in baseList' :key='index'>
                    <span class='clicel' ></span>
                    <el-input v-model="item.base" class='inps' maxlength="10" show-word-limit size='small' placeholder="请输入内容" ></el-input>
                    <i class="el-icon-delete" @click="delBase(index)" ></i>
                 </div>
                <el-button icon="el-icon-plus" circle @click='addBase' class='add_btn' ></el-button>
            </el-form-item>
            <el-form-item label="类型内容" v-else>
                 <div class='base_list' v-for='(item,index) in totalList' :key='index'>
                    <span class='square' ></span>
                    <el-input v-model="item.total" class='inps' maxlength="10" show-word-limit size='small' placeholder="请输入内容" ></el-input>
                    <el-input v-model="item.num" class='inpss' size='small' placeholder="审核最高分数" ></el-input>
                    <i class="el-icon-delete" @click="delTotal(index)" ></i>
                 </div>
                <el-button icon="el-icon-plus" circle @click='addTotal' class='add_btn' ></el-button>
            </el-form-item>
            <el-form-item label="提交附件">
                <el-radio-group v-model="ruleForm.region">
                    <el-radio label="图片"></el-radio>
                    <el-radio label="文档"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="" v-if='ruleForm.region == "图片"' >
                <el-upload
                    action="https://jsonplaceholder.typicode.com/posts/"
                    list-type="picture-card"
                    :on-preview="handlePictureCardPreview"
                    :on-remove="handleRemove">
                    <i class="el-icon-plus"></i>
                    </el-upload>
                    <el-dialog :visible.sync="dialogVisible">
                    <img width="100%" :src="dialogImageUrl" alt="">
                </el-dialog>
            </el-form-item>
             <el-form-item label="" v-if='ruleForm.region == "文档"' >
                <el-upload
                    class="upload-demo"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :on-preview="handlePreview"
                    :on-remove="handleRemoves"
                    multiple
                    :on-exceed="handleExceed"
                    :file-list="fileList">
                    <el-button size="small" type="primary">点击上传</el-button>
                </el-upload>
            </el-form-item>
            <el-form-item label="图片说明" v-if='ruleForm.region == "图片"'>
                 <div class='base_list' v-for='(item,index) in imgList' :key='index'>
                    <span class='img_label'>图片{{index}}说明</span>
                    <el-input v-model="item.base" class='inps' maxlength="10" show-word-limit size='small' placeholder="请输入内容" ></el-input>
                    <i class="el-icon-delete" @click="delImg(index)" ></i>
                 </div>
                <el-button icon="el-icon-plus" circle @click='addImg' class='add_btn' ></el-button>
            </el-form-item>
             <el-form-item label="审核机制">
                <el-radio-group v-model="ruleForm.cheeck">
                    <el-radio label="评审"></el-radio>
                    <el-radio label="自动"></el-radio>
                    <el-radio label="评分" v-if='ruleForm.type1 != "基础型"' ></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" size='medium'>发布</el-button>
                <el-button size='medium'  >取消</el-button>
            </el-form-item>
       </el-form>
   </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {
        nav_active:1,
        ruleForm:{
            title:'',
            type1:'',
            type2:'',
            name:'',
            region:'',
            cheeck:''
        },
        baseList:[],
        imgList:[],
        totalList:[],
        dialogImageUrl: '',
        dialogVisible: false
    }
  },
  computed: {},
  beforeMount () {},
  mounted () {},
  methods: {
        goBack(){
            this.$router.back(-1)
        },
        navTab(tab){
            this.nav_active = tab
        },
        addBase(){
            this.baseList.push({base:''})
        },
        delBase(index){
            this.baseList.splice(index,1)
        },
        addTotal(){
            this.totalList.push({total:'',num:''})
        },
        delTotal(index){
            this.totalList.splice(index,1)
        },
        addImg(){
            this.imgList.push({img:''})
        },
        delImg(index){
            this.imgList.splice(index,1)
        },
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
        },
        handleRemoves(file, fileList) {
            console.log(file, fileList);
        },
        handlePreview(file) {
            console.log(file);
        },
  },
  watch: {}
}
</script>
<style>
.newCollect{
    padding:20px;
}
.newCollect .el-page-header__content{
    font-size:14px;
    color:#333;
}
.newCollect .nav{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom:10px;
}
.newCollect .nav_list{
    font-size:16px;
    color:#A6A6A6;
    border-radius:4px;
    margin:0 14px;
    cursor: pointer;
}
.newCollect .nav_list.active{
    width:118px;
    height:44px;
    text-align: center;
    line-height:44px;
    background:#80BAFD;
    color:#fff;
}
.newCollect .el-tag{
    margin-right:10px;
}
.newCompare .el-checkbox-group{
    width:200px;
}
.newCollect .form_title{
    color:#1890FF;
    font-size:14px;
}
body .newCompare .el-form-item__content{
    display: block;
}

.newCollect .el-input{
    width:400px;
}
.newCollect .inps{
    width:160px;
}
.newCollect .inpss{
    width:110px;
}
.newCollect .el-select{
    width:140px;
    margin-right:20px;
}
.newCollect .el-select>.el-input{
    width:140px;
}

.newCollect .filter-container{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom:30px;
  font-size:12px;
}
.newCollect .el-input{
  margin-right:20px;
}
.newCollect .el-select{
  margin-right:20px;
}
.newCollect .dia_title{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom:16px;
    color:#333;
    font-weight: bold;
}
.newCollect .choose_num{
    font-size:12px;
}
.newCollect .el-pagination .el-input{
    width:80px;
}
.newCompare .base_list{
    display: flex;
    align-items: center;
    margin-bottom:4px;
}
.newCompare .clicel{
    width:12px;
    height:13px;
    display: block;
    border:1px solid #ccc;
    border-radius:50%;
    margin-right:10px;
}
.newCompare .square{
    width:12px;
    height:13px;
    display: block;
    border:1px solid #ccc;
    border-radius:2px;
    margin-right:10px;
}
.newCompare .img_label{
    font-size:12px;
    color:#666;
    margin-right:10px;
}
.newCompare .el-icon-delete{
    color:#F56C6C;
    font-size:16px;
    cursor: pointer;
}
.newCompare .add_btn{
    display: block;
    margin-left:6%;
}
.newCompare .el-upload--picture-card{
    width:120px;
    height:120px;
    line-height:120px;
}
.newCompare .el-upload-list--picture-card .el-upload-list__item{
    width:120px;
    height:120px;
}
</style>
