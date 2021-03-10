<template>
  	<div class="login_page fillcontain">
	  		<div class="form_contianer" v-show="showLogin">
		  		<img src="https://cnbj2.fds.api.xiaomi.com/webfiles/file-img1562261591946091.jpg" alt="">
				<div class='formBox'>
					<el-form :model="loginForm" :rules="rules" ref="loginForm">
					<el-form-item prop="username">
						<el-input v-model="loginForm.username" prefix-icon='el-icon-user' placeholder="用户名"><span>dsfsf</span></el-input>
					</el-form-item>
					<el-form-item prop="password">
						<el-input type="password" prefix-icon='el-icon-lock' placeholder="密码" v-model="loginForm.pwd"></el-input>
					</el-form-item>
					<el-form-item prop="remember">
						<el-checkbox v-model="checked">记住密码</el-checkbox>
					</el-form-item>
					<el-form-item>
				    	<el-button type="primary" @click="submitForm('loginForm')" class="submit_btn">登陆</el-button>
				  	</el-form-item>
				</el-form>
				</div>
		    	
	  		</div>
  	</div>
</template>

<script>
  import {login} from '@/api/api'
  import {  setToken } from '@/utils/auth'
  import Cookies from 'js-cookie'

	export default {
	    data(){
			return {
				loginForm: {
					username: '',
					pwd: '',
				},
				checked:true,
				rules: {
					username: [
			            { required: true, message: '请输入用户名', trigger: 'blur' },
			        ],
					pwd: [
						{ required: true, message: '请输入密码', trigger: 'blur' }
					],
				},
				showLogin: false,
			}
		},
		mounted(){
			this.showLogin = true;
			if(Cookies.get('username')){
				this.loginForm.username = Cookies.get('username')
				this.loginForm.pwd = Cookies.get('pwd')
			}
		},
		computed: {
		},
		methods: {
			async submitForm(formName) {
				this.$refs[formName].validate(async (valid) => {
					if (valid) {
						 login(this.loginForm).then(response => {
							if(response.data.code == 1){
								this.$message({
									type: 'success',
									message: '登录成功'
								});
								this.$router.push('/qx50')
								setToken(response.data.msg.token)
								if(this.checked){
									Cookies.set('username', this.loginForm.username)
									Cookies.set('pwd', this.loginForm.pwd)
								}else{
									Cookies.remove('username')
									Cookies.remove('pwd')
								}
							}else{
								this.$message({
								type: 'error',
								message: response.data.msg
								});
							}
						}).catch((res) => {
							this.$message({
								type: 'error',
								message: res.message
							});
						})
					} else {
						this.$notify.error({
							title: '错误',
							message: '请输入正确的用户名密码',
							offset: 100
						});
						return false;
					}
				});
			},
		}
	}
</script>

<style scoped>
	.el-form{
		width:70%;
	}
	.formBox{
		width:100%;
		height:100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.login_page{
		background-color: #324057;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.manage_tip{
		position: absolute;
		width: 100%;
		top: -100px;
		left: 0;
	
  }
  .manage_tip	p{
			font-size: 34px;
			color: #fff;
    }
    .form_contianer{
		width:1000px;
     	display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: #fff;
    }
  .form_contianer .wh,.form_contianer .ctp{
    width:320px;
    height:210px;
    padding: 25px;
		border-radius: 5px;
		text-align: center;
		background-color: #fff;
  }
  .form_contianer	.submit_btn{
			width: 100%;
			font-size: 16px;
		}
	.tip{
		font-size: 12px;
		color: red;
	}
	.form-fade-enter-active, .form-fade-leave-active {
	  	transition: all 1s;
	}
	.form-fade-enter, .form-fade-leave-active {
	  	transform: translate3d(0, -50px, 0);
	  	opacity: 0;
	}
</style>
