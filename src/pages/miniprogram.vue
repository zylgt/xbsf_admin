<template>
   <div>
        <!-- 查询和其他操作 -->
        <div class="filter-container">
          <el-input v-model.trim="listQuery.filter.keyword" clearable class="filter-item" style="width: 200px;" placeholder="请输入关键字"/>
          <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">查找</el-button>
          <el-button :loading="downloadLoading" class="filter-item" type="primary" icon="el-icon-download" @click="handleDownload">导出</el-button>
        </div>
            <!-- 查询结果 -->
    <el-table v-loading="listLoading" :data="list" element-loading-text="正在查询中。。。" border fit highlight-current-row>

      <el-table-column align="center" label="姓名" prop="fullname"/>

      <el-table-column align="center" label="电话" prop="phone"/>

       <el-table-column align="center" label="性别" prop="sex"/>

      <el-table-column align="center" label="省" prop="provinces"/>
      <el-table-column align="center" label="市" prop="city"/>
      <el-table-column align="center" label="来源" prop="source"/>
      <el-table-column align="center" label="车型" prop="carmodel"/>
      <el-table-column align="center" label="PC/手机" prop="stype"/>
      <el-table-column align="center" label="时间" prop="addtime" width='180' />
    </el-table>
    <Pagination v-show="total>0" :total="total" :page.sync="listQuery.page" limit.sync="10" @pagination="getLists" />
   </div>
</template>
<script>
import { getList ,downList} from '@/api/api'
import {  getToken } from '@/utils/auth'
import {formatTime} from '@/utils/formatime'
import Pagination from '@/components/Pagination' 
export default {
  name: '',
  data () {
    return {
      list: [],
      total:0,
      listQuery:{
         token:getToken(),
         page:1,
         filter:{
           type:1,
           keyword:''
         }
      },
      listLoading: true,
      downloadLoading: false
    }
  },
  components: { Pagination },
  computed: {},
  beforeMount () {},
  mounted () {
     this.getLists()
  },
  methods: {
    getLists() {
      this.listLoading = true
      getList(this.listQuery).then(response => {
      if(response.data.code == 1){
          response.data.msg.list.forEach(item => {
              if(item.sex == 1){
                item.sex = '男'
              }else if(item.sex == 2){
                item.sex = '女'
              }
            item.addtime = formatTime(item.addtime)
          });
          this.list = response.data.msg.list
          this.total = response.data.msg.allNum
          this.listLoading = false
        }else{
          this.$message({
          type: 'error',
          message: '请退出重新登录'
        });
        this.$router.push('/');
        this.listLoading = false
       }
      }).catch(() => {
        this.list = []
        this.total = 0
        this.listLoading = false
      })
    },
    handleFilter() {
      this.listQuery.page = 1
      this.getLists()
    },
     handleDownload() {
      this.downloadLoading = true
      downList(this.listQuery).then(response => {
       if(response.data.code == 1){
         response.data.msg.forEach(item => {
              if(item.sex == 1){
                item.sex = '男'
              }else if(item.sex == 2){
                item.sex = '女'
              }
            item.addtime = formatTime(item.addtime)
          });
         import('@/vendor/Export2Excel').then(excel => {
          const tHeader = ['姓名', '电话', '性别', '省', '市', '来源', '车型','PC/手机', '时间']
          const filterVal = ['fullname', 'phone', 'sex','provinces', 'city', 'source','carmodel' ,'stype', 'addtime']
          excel.export_json_to_excel2(tHeader, response.data.msg, filterVal, '预约小程序留资信息')
          this.downloadLoading = false
        })
       }else{
         this.$message({
          type: 'error',
          message: response.data.msg
        });
       }
      }).catch(() => {
        this.list = []
        this.total = 0
        this.listLoading = false
      })
    }
  },
  watch: {}
}
</script>
<style>
.filter-container{
  display: flex;
  justify-content: flex-end;
  margin-bottom:30px;
}
.el-input{
  margin-right:20px;
}
</style>
