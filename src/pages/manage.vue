<template>
   <div class="manage_page fillcontain">
          <el-row class='top'>
            <el-header height='48px' >
                <div class='logo' >
                  <img src="../../static/image/logo.jpeg" alt="" class='logo_icon' >
                  <p class='logo_text'>北京市海淀北部新区实验学校</p>
                </div>
                <div class='avatar_box'>
                    <i class="el-icon-search" style="width:22px;height:22px;" ></i>
                    <i class='el-icon-question'></i>
                    <i class='el-icon-bell'></i>
                    <el-dropdown  @command="handleCommand" menu-align='start'>
                        <img src="../../static/image/avatar.png" class="avatar">
                        <p class='name'>用户名</p>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="signout">退出</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </el-header>
            <el-menu default-active="collect"  theme="dark" router mode="horizontal" >
              <el-menu-item :index="item.routers" v-if='item.active' v-for='(item,index) in routerList' :key='index' >{{item.name}}</el-menu-item>
            </el-menu>
          </el-row>
          <el-row class='main'>
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
          </el-row>
   </div>
</template>
<script>
import {  removeToken } from '@/utils/auth'
export default {
  name: '',
  data () {
    return {
      routerList:[{name:'采集管理',active:true,routers:'collect'},
      {name:'评比管理',active:false,routers:'compare'},
      {name:'评价管理',active:true,routers:''},
      {name:'学年管理',active:true,routers:'schoolYear'},
      {name:'年级管理',active:false,routers:'grade'},
      {name:'科目管理',active:true,routers:'object'},
      {name:'班级管理',active:true,routers:'class'},
      {name:'用户管理',active:true,routers:'user'},
      {name:'角色管理',active:true,routers:'role'},
      {name:'授权管理',active:true,routers:'author'},
      {name:'账号管理',active:true,routers:'account'},
      {name:'字典管理',active:true,routers:'dictionary'},
      {name:'规则配置',active:true,routers:'regulation'}]
    }
  },
  components: {},
  computed: {
  },
  beforeMount () {},
  mounted () {
    
  },
  methods: {
    handleCommand(){
      removeToken()
      this.$message({
          type: 'success',
          message: '退出成功'
      });
      this.$router.push('/');
    }
  },
  watch: {}
}
</script>
<style>
    .el-menu--horizontal .el-menu-item:not(.is-disabled):focus, .el-menu--horizontal .el-menu-item:not(.is-disabled):hover{
      color:#409EFF;
    }
    body .el-menu--horizontal>.el-menu-item.is-active{
      color:#409EFF;
    }
    .el-menu--horizontal>.el-menu-item{
      height:48px;
      line-height: 48px;
    }
    .el-header{
        padding:0 20px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background:#fff;
    }
    .el-dropdown{
        height:32px;
        display: flex;
        align-items: center;
    }
    .avatar{
        width:32px;
        height:32px;
        margin-left:30px;
    }
	  .el-dropdown-menu__item{
        text-align: center;
    }
    .logo_icon{
      width:26px;
      height:26px;
      margin-right:10px;
    }
    .logo{
      display: flex;
      align-items:center;
      justify-content: center;
    }
    .logo_text{
      font-size:16px;
      color:#262626;
    }
    .avatar_box{
      color:#A6A6A6;
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
    .avatar_box i{
      font-size:20px;
      margin:0 10px;
    }
    .name{
      color:#A6A6A6;
      margin-left:10px;
    }
    .top{
      margin-bottom:30px;
    }
    .main{
      background:#fff;
      width:90%;
      margin:0 auto;
      height:80%;
      overflow: auto;
    }

.el-tabs--left .el-tabs__header.is-left, .el-tabs--left .el-tabs__header.is-right, .el-tabs--left .el-tabs__nav-scroll, .el-tabs--left .el-tabs__nav-wrap.is-left, .el-tabs--left .el-tabs__nav-wrap.is-right, .el-tabs--right .el-tabs__header.is-left, .el-tabs--right .el-tabs__header.is-right, .el-tabs--right .el-tabs__nav-scroll, .el-tabs--right .el-tabs__nav-wrap.is-left, .el-tabs--right .el-tabs__nav-wrap.is-right{
  width:100%;
}
.el-tabs--left .el-tabs__item.is-left{
    text-align: center;
}
.el-tabs__nav-scroll{
  padding-top:30px;
}
.el-tabs__item{
    width:100%;
    color:#A6A6A6;
    height:50px;
    line-height:50px;
}
.el-table thead{
  background-color:#FAFAFA;
}
.el-table thead tr,.el-table thead th{
  background-color:#FAFAFA;
}
.inner{
    padding:20px 0;
}
.el-col-4{
    height:100%;
}
.el-tabs--left, .el-tabs--right{
    height:100%;
}
</style>
