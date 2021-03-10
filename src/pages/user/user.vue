<template>
   <div class='collect'>
       <el-col :span='4'>
            <el-tabs tab-position="left">
                <el-tab-pane label="学生"></el-tab-pane>
                <el-tab-pane label="教师"></el-tab-pane>
                <el-tab-pane label="领导"></el-tab-pane>
            </el-tabs>
       </el-col>
       <el-col :span='20'>
            <div class='inner'>
                <div class='new'>
                    <el-button type="primary" icon="el-icon-plus" size='medium' @click='deitName' >新建</el-button>
                </div>
                <el-table v-loading="listLoading" :data="list" header-row-class-name='headerBg' element-loading-text="正在查询中。。。"  fit highlight-current-row>

                    <el-table-column align="center" label="序号" prop="id"/>

                    <el-table-column align="center" label="学生名称" prop="name"/>

                    <el-table-column align="center" label="学生学号" prop="number"/>

                    <el-table-column align="center" label="所在年级" prop="grade"/>

                    <el-table-column align="center" label="所在班级" prop="classs"/>

                    <el-table-column align="center" label="性别">
                        <template slot-scope="scope">
                            <p v-if='scope.row.sex==1' >男</p>
                            <p v-else>女</p>
                        </template>
                    </el-table-column>
                    <el-table-column align="center" label="操作" width='260'>
                        <template slot-scope="scope">
                            <span class='handle' @click="deitName" >编辑</span>
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
  data () {
    return {
        listLoading:false,
        page:1,
        total:10,
        visible:false,
        list:[{id:1,name:'张三',grade:'七年级',number:'20190756',classs:'1班',sex:1,visible:false},
              {id:2,name:'张三',grade:'七年级',number:'20190756',classs:'1班',sex:2,visible:false},
              {id:3,name:'张三',grade:'七年级',number:'20190756',classs:'1班',sex:2,visible:false},
              {id:4,name:'张三',grade:'七年级',number:'20190756',classs:'1班',sex:1,visible:false},]
    }
  },
  components: { Pagination },
  computed: {},
  beforeMount () {},
  mounted () {},
  methods: {
      delName(scope,index){
          this.list.splice(index,1)
      },
      deitName(){
          this.$router.push('/newUser')
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
