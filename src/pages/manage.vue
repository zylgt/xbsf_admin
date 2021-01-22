<template>
   <div class="manage_page fillcontain">
         <el-row style="height: 100%;">
	  		<el-col :span="4"  style="min-height: 100%; background-color: #324057;">
                <div class="logo">后台管理</div>
				<el-menu default-active="qx50"  
                 text-color="#fff" style="min-height: 100%;" theme="dark" router>
					<el-menu-item index="qx50"><i class="el-icon-document"></i>QX50 - 移动站点</el-menu-item>
					<el-menu-item index="qx50l"><i class="el-icon-star-on"></i>Q50L - 车书</el-menu-item>
          <el-menu-item index="mini3d"><i class="el-icon-edit"></i>QX50 - 3D小程序</el-menu-item>
          <el-menu-item index="miniprogram"><i class="el-icon-setting"></i>全系 - 预约小程序</el-menu-item>
				</el-menu>
			</el-col>
			<el-col :span="20" style="height: 100%;overflow: auto;">
                <el-header height='64px' >
                    <el-dropdown  @command="handleCommand" menu-align='start'>
                        <img src="../../static/image/avatar.png" class="avatar">
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="signout">退出</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </el-header>
                <div class='main'>
                    <keep-alive>
                        <router-view></router-view>
                    </keep-alive>
                </div>
			</el-col>
		</el-row>
   </div>
</template>
<script>
import {  removeToken } from '@/utils/auth'
export default {
  name: '',
  data () {
    return {}
  },
  components: {},
  computed: {
  },
  beforeMount () {},
  mounted () {},
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
    .el-menu-item.is-active{
      color:#fff;
      background:#409EFF;
    }
    .logo{
        height:60px;
        color:#fff;
        text-align: left;
        line-height: 60px;
        font-size:24px;
        padding-left:20px;
    }
    .main{
        margin:30px;
        margin-bottom:0;
        padding:30px;
        padding-bottom:0;
        background:#fff;
    }
    .manage_page{
        height: 100%;
    }
    .el-menu{
      background-color:rgb(50, 64, 87) ;
    }
    .el-menu-item:focus, .el-menu-item:hover{
      background-color:#409EFF;
    }
    .el-menu-item i{
        color:#fff;
    }
  .el-header, .el-footer {
    background-color: #fff;
    color: #333;
    line-height: 64px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
    .el-header{
        display: flex;
        justify-content: flex-end;
        padding-right:60px;
        align-items: center;
    }
    .el-dropdown{
        height:42px;
    }
    .avatar{
        width:42px;
        height:42px;
    }
	.el-dropdown-menu__item{
        text-align: center;
    }
</style>
