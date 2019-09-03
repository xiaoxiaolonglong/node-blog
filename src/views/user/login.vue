<template>
    <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="账户">
            <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
            <el-input v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="login">登录</el-button>
            <!-- <el-button>取消</el-button> -->
        </el-form-item>
    </el-form>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          username: '',
          password: '',
        },
      }
    },
    methods: {
      login(){
        let self = this;
        //使用axios请求数据
        this.axios.post("/api/user/login",self.form).then(function (response) {
              //此处要使用self，如果使用this指向的是axios对象，不再是vue对象
              if(response.data.errno === 0){
                self.$message('登录成功');
                self.$router.push({path:"/"});
              }
        })
        .catch(function (error) {
            console.log(error);
        });
      }
    }
  }
</script>

<style>
    .el-form{
        width :100%;
        padding: 20px;
        box-sizing: border-box;
    }
</style>