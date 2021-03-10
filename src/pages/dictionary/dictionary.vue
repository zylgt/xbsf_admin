<template>
   <div class='dictionary'>
       <div class='nav'>
           <div :class="['nav_list',nav_active==1?'active':'']" @click="navTab(1)" >学生</div>
           <el-divider direction="vertical"></el-divider>
           <div :class="['nav_list',nav_active==2?'active':'']"  @click="navTab(2)">教师</div>
           <el-divider direction="vertical"></el-divider>
           <div :class="['nav_list',nav_active==3?'active':'']"  @click="navTab(3)">领导</div>
           <div class='new'>
                <el-button type="primary" icon="el-icon-plus" size='medium' @click='newName' >新建</el-button>
            </div>
       </div>
       <div class='inner'>
            <div class='dictionary_title'>基础型指标</div>
            <el-table v-loading="listLoading" :data="list" header-row-class-name='headerBg' element-loading-text="正在查询中。。。"  fit highlight-current-row>

                <el-table-column align="center" label="序号" prop="id"/>

                <el-table-column align="center" label="年级名称" prop="name"/>

                <el-table-column align="center" label="所在学年" prop="timmer"/>

                <el-table-column align="center" label="状态">
                    <template slot-scope="scope">
                        <p v-if='scope.row.status==1' >有效</p>
                        <p v-else>无效</p>
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
            <div class='dictionary_title'>累计型指标</div>
            <el-table v-loading="listLoading" :data="list" header-row-class-name='headerBg' element-loading-text="正在查询中。。。"  fit highlight-current-row>

                <el-table-column align="center" label="序号" prop="id"/>

                <el-table-column align="center" label="年级名称" prop="name"/>

                <el-table-column align="center" label="所在学年" prop="timmer"/>

                <el-table-column align="center" label="状态">
                    <template slot-scope="scope">
                        <p v-if='scope.row.status==1' >有效</p>
                        <p v-else>无效</p>
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
            <div class='dictionary_title'>动态型指标</div>
            <el-table v-loading="listLoading" :data="list" header-row-class-name='headerBg' element-loading-text="正在查询中。。。"  fit highlight-current-row>

                <el-table-column align="center" label="序号" prop="id"/>

                <el-table-column align="center" label="年级名称" prop="name"/>

                <el-table-column align="center" label="所在学年" prop="timmer"/>

                <el-table-column align="center" label="状态">
                    <template slot-scope="scope">
                        <p v-if='scope.row.status==1' >有效</p>
                        <p v-else>无效</p>
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
        </div>
   </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {
        listLoading:false,
        visible:false,
        nav_active:1,
        list:[{id:1,name:'七年级',timmer:'2019-2020学年',status:1,visible:false},
              {id:2,name:'七年级',timmer:'2019-2020学年',status:2,visible:false},
              {id:3,name:'七年级',timmer:'2019-2020学年',status:2,visible:false},
              {id:4,name:'七年级',timmer:'2019-2020学年',status:1,visible:false},]
    }
  },
  computed: {},
  beforeMount () {},
  mounted () {},
  methods: {
      delName(scope,index){
          this.list.splice(index,1)
      },
      newName(){
          this.$router.push('/newDictionary')
      },
      navTab(tab){
          this.nav_active = tab
      }
  },
  watch: {}
}
</script>
<style>
.dictionary{
    padding:30px;
}
.dictionary .nav{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom:10px;
    position: relative;
}
.dictionary .nav_list{
    font-size:16px;
    color:#A6A6A6;
    border-radius:4px;
    margin:0 14px;
    cursor: pointer;
}
.dictionary .nav_list.active{
    width:118px;
    height:44px;
    text-align: center;
    line-height:44px;
    background:#80BAFD;
    color:#fff;
}
.dictionary .new{
    display: flex;
    padding:0 20px;
    justify-content: flex-end;
    margin-bottom:40px;
    position: absolute;
    top:0;
    right:0;
}
.dictionary .handle{
    font-size:12px;
    color:#1890FF;
    cursor: pointer;
}
.dictionary .del{
    color:#FF5555;
}
.dictionary .table_label{
     color:#FF5555;
}
.dictionary_title{
    font-size:16px;
    color:#1890FF;
    margin:20px 0;
}
</style>
