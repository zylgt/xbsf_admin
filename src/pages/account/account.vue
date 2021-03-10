<template>
   <div class='collect'>
       <el-col :span='4'>
            <el-tabs tab-position="left">
                <el-tab-pane label="有效账号"></el-tab-pane>
                <el-tab-pane label="已删账号"></el-tab-pane>
            </el-tabs>
       </el-col>
       <el-col :span='20'>
            <div class='inner'>
                <div class='new'>
                    <el-button type="primary" icon="el-icon-plus" size='medium' @click='newName' >新建</el-button>
                </div>
                <el-table v-loading="listLoading" :data="list" header-row-class-name='headerBg' element-loading-text="正在查询中。。。"  fit highlight-current-row>

                    <el-table-column align="center" label="序号" prop="id"/>

                    <el-table-column align="center" label="用户" prop="name"/>

                    <el-table-column align="center" label="用户编号" prop="number"/>

                    <el-table-column align="center" label="用户身份" prop="card"/>

                    <el-table-column align="center" label="账号" prop="account"/>

                    <el-table-column align="center" label="状态">
                        <template slot-scope="scope">
                            <p v-if='scope.row.status==1' >已激活</p>
                            <p v-else>未激活</p>
                        </template>
                    </el-table-column>

                    <el-table-column align="center" label="操作" width='260'>
                        <template slot-scope="scope">
                            <span class='handle'>编辑</span>
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
        list:[{id:1,name:'张三',number:'100012',card:'老师',account:'1000234',statue:1,visible:false},
              {id:2,name:'张三',number:'100012',card:'学生',account:'1000234',statue:1,visible:false},
              {id:3,name:'张三',number:'100012',card:'校长',account:'1000234',statue:1,visible:false},
              {id:4,name:'张三',number:'100012',card:'校长',account:'1000234',statue:2,visible:false},]
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
      newName(){
          this.$router.push('/newCompare')
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
