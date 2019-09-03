<template>
    <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="活动名称">
            <el-input v-model="form.title"></el-input>
        </el-form-item>
        <el-form-item label="活动形式">
            <el-input type="textarea" v-model="form.content"></el-input>
        </el-form-item>
        <el-form-item label="封面图片">
            <el-upload
                class="avatar-uploader"
                action="/api/upload/single"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
                <img v-if="form.imgurl" :src="form.imgurl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">提交</el-button>
            <el-button @click="$router.go(-1)">取消</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          title: '',
          content: '',
          imgurl: '',
        },
      }
    },
    methods: {
      onSubmit() {
        this.addBlog();
      },
      handleAvatarSuccess(res, file) {
        this.form.imgurl = res.data.img;
        // this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
      addBlog(){
        let self = this;
        //使用axios请求数据
        this.axios.post("/api/blog/new",self.form).then(function (response) {
              //此处要使用self，如果使用this指向的是axios对象，不再是vue对象
              // self.movieList = response.data;
              self.$router.push({path:"/"});
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
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px !important;
        text-align: center;
    }
    .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }
</style>