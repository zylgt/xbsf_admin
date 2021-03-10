<template>
   <div class='newCollect newCompare'>
       <el-page-header @back="goBack" content="新建评比"></el-page-header>
       <div class='nav'>
           <div :class="['nav_list',nav_active==1?'active':'']" @click="navTab(1)" >学生</div>
           <el-divider direction="vertical"></el-divider>
           <div :class="['nav_list',nav_active==2?'active':'']"  @click="navTab(2)">教师</div>
           <el-divider direction="vertical"></el-divider>
           <div :class="['nav_list',nav_active==3?'active':'']"  @click="navTab(3)">领导</div>
       </div>
       <el-form ref="ruleForm" :model="ruleForm" label-width="160px">
            <el-form-item label="标题">
                <el-input v-model="ruleForm.title" maxlength="20" show-word-limit></el-input>
            </el-form-item>
            <el-form-item label="评比对象">
                <el-tag
                    :key="tag"
                    v-for="tag in dynamicTags"
                    closable
                    :disable-transitions="false"
                    @close="handleClose(tag)">
                {{tag}}
                </el-tag>
                <el-tag effect="dark" @click="dialogTableVisible=true,dialogTitle='评比对象'" > 添加 <i class='el-icon-plus'></i> </el-tag>
            </el-form-item>
            <el-form-item label="累计型指标（共3项）">
                <el-checkbox-group v-model="ruleForm.total">
                    <el-checkbox label="获奖荣誉(单选,评分)" name="sex"></el-checkbox>
                    <el-checkbox label="科研成果(单选,评分)" name="nation"></el-checkbox>
                    <el-checkbox label="基本功(单选,评分)" name="card"></el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="动态型指标（共3项）">
                <el-select v-model="ruleForm.region" placeholder="请选择学年" size='small' >
                    <el-option label="2019-2020" value="shanghai"></el-option>
                    <el-option label="2020-2021" value="beijing"></el-option>
                </el-select>
                <el-checkbox-group v-model="ruleForm.total">
                    <el-checkbox label="教学计划(单选,评分)" name="sex"></el-checkbox>
                    <el-checkbox label="教学总结(单选,评分)" name="nation"></el-checkbox>
                    <el-checkbox label="教学成绩(单选,评分)" name="card"></el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" size='medium'>发布</el-button>
                <el-button size='medium'  >取消</el-button>
            </el-form-item>
       </el-form>
       <el-dialog :title="dialogTitle" :visible.sync="dialogTableVisible" center>
            <div class="filter-container">
                <p>年级：</p> 
                <el-select v-model="chooseForm.class" placeholder="请选择" size='mini'>
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value" > 
                </el-option>
                </el-select>
                <p>科目：</p> 
                <el-select v-model="chooseForm.object" placeholder="请选择" size='mini' >
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value" >
                </el-option>
                </el-select>
                <p>姓名：</p>
                <el-input v-model.trim="chooseForm.name" clearable class="filter-item" style="width: 140px;" size='mini' placeholder="请输入教师名"/>
                <el-button class="filter-item" type="primary" icon="el-icon-search" size='mini'>查找</el-button>
            </div>
            <div class='dia_title'>
                <p>评比名单</p>
                <p class='choose_num'>已选择：{{choose_len}}人</p>
            </div>
            <el-table v-loading="listLoading" :data="list" header-row-class-name='headerBg' element-loading-text="正在查询中。。。"  fit highlight-current-row
            @selection-change="handleSelectionChange">
                    <el-table-column type="selection" width="55" />
                    
                    <el-table-column align="center" label="账号" prop="account"/>

                    <el-table-column align="center" label="姓名" prop="name"/>

                    <el-table-column align="center" label="所在年级" prop="school"/>
                    <el-table-column align="center" label="所教班级" prop="class"/>
                    <el-table-column align="center" label="所教科目" prop="object"/>
            </el-table>
            <Pagination v-show="total>0" :total="total" :page.sync="page" limit.sync="10" />
        </el-dialog>
   </div>
</template>
<script>
import Pagination from '@/components/Pagination' 
export default {
  name: '',
  data () {
    return {
        nav_active:1,
        ruleForm:{
            title:'',
            date:'',
            type:[],
            total:[],
            region:''
        },
        dynamicTags: ['标签一', '标签二', '标签三'],
        dialogTableVisible:false,
        listLoading:false,
        page:1,
        total:10,
        chooseForm:{
            class:'',
            object:'',
            name:''
        },
         options:[{value:1,label:'2019-2020期末教师评比'},{value:2,label:'2020-2021期末教师评比'},
        {value:3,label:'2019-2021期末教师评比'}],
        list:[{account:1109092,name:'赵宇',school:'七年级',class:'1班',object:'语文'},
        {account:1109092,name:'赵宇',school:'七年级',class:'1班',object:'语文'},
        {account:1109092,name:'赵宇',school:'七年级',class:'1班',object:'语文'}],
        choose_len:0,
        dialogTitle:''
    }
  },
  components: { Pagination },
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
        handleClose(tag) {
            this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
        },
        handleSelectionChange(val){
            console.log(val)
            this.choose_len = val.length
        }
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
</style>
