<template>
   <div class='collect'>
       <el-col :span='4'>
            <el-tabs tab-position="left">
                <el-tab-pane label="进行中任务"></el-tab-pane>
                <el-tab-pane label="已完成任务"></el-tab-pane>
            </el-tabs>
       </el-col>
       <el-col :span='20'>
            <div class='inner'>
                <div class='new'>
                    <el-button type="primary" icon="el-icon-plus" size='medium' @click='newName' >新建</el-button>
                </div>
                <el-table v-loading="listLoading" :data="list" header-row-class-name='headerBg' element-loading-text="正在查询中。。。"  fit highlight-current-row>

                    <el-table-column align="center" label="序号" prop="id"/>

                    <el-table-column align="center" label="采集名称" prop="name"/>

                    <el-table-column align="center" label="类型" prop="type"/>

                    <el-table-column align="center" label="状态">
                        <template slot-scope="scope">
                            剩<span class='table_label'>{{scope.row.status}}</span>天
                        </template>
                    </el-table-column>
                    <el-table-column align="center" label="进度">
                        <template slot-scope="scope">
                            {{scope.row.progress}} (200/320)
                        </template>
                    </el-table-column>
                    <el-table-column align="center" label="操作" width='260'>
                        <template slot-scope="scope">
                            <span class='handle'>编辑</span>
                            <el-divider direction="vertical"></el-divider>
                            <span class='handle'>复制</span>
                            <el-divider direction="vertical"></el-divider>
                            <span class='handle'>查看明细</span>
                            <el-divider direction="vertical"></el-divider>
                            <el-popover
                                placement="top"
                                width="160"
                                trigger="click"
                                v-model="scope.row.visible">
                                <p>这确定删除吗？</p>
                                <div style="text-align: right; margin: 0">
                                    <el-button size="mini" type="text" @click="scope.row.visible = false">取消</el-button>
                                    <el-button type="primary" size="mini" @click="delName(scope.row,scope.$index)">确定</el-button>
                                </div>
                                <span class='handle del' slot="reference" >删除</span>
                            </el-popover>
                           
                        </template>
                    </el-table-column>
                </el-table>
                <Pagination v-show="total>0" :total="total" :page.sync="page" limit.sync="10" />
            </div>
       </el-col>
   </div>
</template>
<script>
import Pagination from '@/components/Pagination' 
export default {
  name: '', 
  inject:['reload'],   
  data () {
    return {
        listLoading:false,
        page:1,
        total:10,
        visible:false,
        list:[{id:1,name:'荣誉获奖数据采集任务',type:'需审核',status:'3',progress:'80%',visible:false},
              {id:2,name:'荣誉获奖数据采集任务',type:'需审核',status:'2',progress:'70%',visible:false},
              {id:3,name:'荣誉获奖数据采集任务',type:'需审核',status:'2',progress:'70%',visible:false},
              {id:4,name:'荣誉获奖数据采集任务',type:'需审核',status:'2',progress:'70%',visible:false},]
    }
  },
  components: { Pagination },
  computed: {},
  beforeMount () {},
  mounted () {
  },
  methods: {
      delName(scope,index){
          this.list.splice(index,1)
      },
      newName(){
          this.$router.push('/newCollect')
      }
  },
  watch: {}
}
</script>
<style>
.collect{
    height:100%;
}
.collect .new{
    display: flex;
    padding:0 20px;
    justify-content: flex-end;
    margin-bottom:40px;
}
.collect .handle{
    font-size:12px;
    color:#1890FF;
    cursor: pointer;
}
.collect .del{
    color:#FF5555;
}
.collect .table_label{
     color:#FF5555;
}
</style>
