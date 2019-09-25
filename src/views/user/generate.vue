<template>
    <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="">
            上传微信头像，获取国庆快乐，完成之后长按图片保存
        </el-form-item>
        <el-form-item style="position:relative">
            <div style="position:relative">
                <canvas id="myCanvas" width="250" height="250" style="visibility:hidden;">
                    Your browser does not support the canvas element.
                </canvas>
                <img src="" alt="" id="img" style="position:absolute;width:250px;height:250px;top:0;left:0;border:1px solid #c3c3c3;">
            </div>
        </el-form-item>
        <el-form-item label="微信头像">
            <el-upload
                class="avatar-uploader"
                action="/api/upload/single"
                :limit=1
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
                <img v-if="form.imgurl" :src="form.imgurl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
        </el-form-item>
        <!-- <el-form-item>
            <el-button type="primary" @click="download">下载</el-button>
        </el-form-item> -->
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
        c7 : {}
      }
    },
    mounted(){
        this.c7 = document.getElementById("myCanvas")
    },
    methods: {
      onSubmit() {
        this.addBlog();
      },
      handleAvatarSuccess(res, file) {
        this.form.imgurl = res.data.img;
        // this.imageUrl = URL.createObjectURL(file.raw);
        var _this = this
        // _this.addImg("./static/images/weixin.jpg",function(){
        _this.addImg(res.data.img,function(){
            _this.addImg("./static/images/happy.png",function(){
                var img = document.getElementById("img");
                img.src =  _this.c7.toDataURL("image/png");
            })
        })
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
      addImg(url,fun){
          //函数将用户上传的图片放到canvas中
            var _this = this
            var cW = _this.c7.offsetWidth;    // 获取元素宽度
            var cH = _this.c7.offsetHeight;   // 获取元素高度
            var imgObj = new Image();
            imgObj.src = url;
            var imgW = '';
            var imgH = '';
            var aa = 1;
            imgObj.onload = function() {
                imgW = imgObj.width;
                imgH = imgObj.height;
                var ctx7 = _this.c7.getContext("2d");
                ctx7.drawImage(this,0,cH-(imgH*cW/imgW),cW,imgH*cW/imgW)
                 if(typeof fun == "function"){
                    fun()
                }
                
            }
           
        },
        download() {
            //下载
            var _this = this
            // var dom = document.createElement("a");
            // dom.href = _this.c7.toDataURL("image/png");
            // dom.download = new Date().getTime() + ".png";
            // dom.click();

                var dataURL = _this.c7.toDataURL("image/png");
                _this.saveFile(dataURL, new Date().getTime() + ".png");  
        },
        saveFile(data, filename){
            var save_link = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
            save_link.href = data;
            save_link.download = filename;
        
            var event = document.createEvent('MouseEvents');
            event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
            save_link.dispatchEvent(event);
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