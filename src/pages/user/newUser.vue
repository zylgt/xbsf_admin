<template>
   <div class='personal'>
       <el-page-header @back="goBack" content="新建用户"></el-page-header>
       <div class='personal_list'>
          <p class='personal_label'>姓名：</p> 
          <el-input v-model="name" size='small' ></el-input>
       </div>
       <div class='personal_list'>
          <p class='personal_label'>工号：</p> 
          <el-input v-model="number" size='small' ></el-input>
       </div>
       <div class='personal_list'>
          <p class='personal_label'>所属班级：</p> 
          <el-tag
            :key="tag"
            v-for="tag in dynamicTags"
            closable
            :disable-transitions="false"
            @close="handleClose(tag)">
            {{tag}}
            </el-tag>
            <el-input
            class="input-new-tag"
            v-if="inputVisible"
            v-model="inputValue"
            ref="saveTagInput"
            size="small"
            @keyup.enter.native="handleInputConfirm"
            @blur="handleInputConfirm"
            >
            </el-input>
            <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
       </div>
        <div class='personal_list'>
          <p class='personal_label'>性别：</p> 
          <el-radio v-model="radio" label="1">男</el-radio>
          <el-radio v-model="radio" label="2">女</el-radio>
       </div>
       <div class='personal_list personal_title'>累计型指标</div>
        <div class='personal_list personal_lists'>
          <p class='personal_label'>获奖荣誉：</p> 
          <div class='personal_honour'>
              <p class='honour_number'>国家级，5分</p>
              <div class='img_box'>
                  <img src="https://hbtv-1302663429.file.myqcloud.com/img/img1614651639.jpg" alt="" class='honour_img' >
                  <p class='personal_cheeck'>
                      已审核
                  </p>
              </div>
              <div class='personal_comment'>这里是评语呀。。。</div>
          </div>
       </div>
       <div class='personal_list'>
          <p class='personal_label'>科研成果：</p> 
          <el-input v-model="number" size='small' ></el-input>
       </div>
       <div class='personal_list'>
          <p class='personal_label'>基本功：</p> 
          <el-input v-model="number" size='small' ></el-input>
       </div>
       <div class='personal_list personal_title'>动态型指标</div>
        <div class='personal_list personal_lists'>
          <p class='personal_label'>获奖荣誉：</p> 
          <div class='personal_honour'>
              <p class='honour_number'>期末，3分</p>
              <div class='img_box'>
                  <img src="https://hbtv-1302663429.file.myqcloud.com/img/img1614651639.jpg" alt="" class='honour_img' >
                  <p class='personal_cheeck'>
                      已审核
                  </p>
              </div>
              <div class='personal_comment'>这里是评语呀。。。</div>
          </div>
       </div>
       <div class='personal_list'>
          <p class='personal_label'>教学计划：</p> 
          <el-input v-model="number" size='small' ></el-input>
       </div>
       <div class='personal_list'>
          <p class='personal_label'>教学总结：</p> 
          <el-input v-model="number" size='small' ></el-input>
       </div>
       <el-button type="primary" size='medium' class='el-buttons' >保存</el-button>
       <div class='personal_now'>
           <p class='now_number'>8</p>
           <p>当前积分</p>
       </div>
   </div> 
</template>
<script>
export default {
  name: '',
  data () {
    return {
        name:'',
        number:'',
        dynamicTags: ['班级一', '班级二', '班级三'],
        inputVisible: false,
        inputValue: '',
        radio:''
    }
  },
  components: {},
  computed: {},
  beforeMount () {},
  mounted () {},
  methods: {
       goBack(){
            this.$router.back(-1)
        },
      handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },

      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },

      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.dynamicTags.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
      }
  },
  watch: {}
}
</script>
<style>
.personal{
    padding:30px;
    position: relative;
}
.personal .el-page-header__content{
    font-size:14px;
    color:#333;
}
.personal  .el-page-header{
    margin-bottom:20px;
}
 .personal .el-tag + .el-tag {
    margin-left: 10px;
  }
  .personal .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .personal  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
  .personal  .personal_list{
      display: flex;
      align-items: center;
      margin-bottom:20px;
      font-size:14px;
  }
  .personal  .personal_lists{
      align-items: flex-start;
  }
  .personal  .el-input{
      max-width: 200px;
  }
  .personal  .personal_label{
      width:80px;
      text-align: right;
  }
  .personal  .personal_title{
      color:#409EFF;
  }
  .personal  .personal_honour{
      width:160px;
  }
  .personal  .honour_number{
      font-size:14px;
      color:#666;
      margin-bottom:6px;
  }
  .personal  .img_box{
      width:120px;
      position: relative;
      overflow: hidden;
  }
  .personal  .honour_img{
      width:120px;
  }
  .personal  .personal_cheeck{
      width:50px;
      height:16px;
      text-align: center;
      line-height: 16px;
      font-size:14px;
      color:#fff;
      background:#67C23A;
      position: absolute;
      right:0;
      top:0;
  }
  .personal  .personal_comment{
       font-size:14px;
      color:#666;
  }
  .personal .el-buttons{
    width:120px;
    display: block;
    margin:10px auto;
    }
    .personal_now{
        position: absolute;
        right:30px;
        top:0;
        font-size:16px;
        color:#666;
        text-align: center;
    }
    .now_number{
        font-size:42px;
        color:#409EFF;
        text-align: center;
        font-weight: bold;
    }
</style>
