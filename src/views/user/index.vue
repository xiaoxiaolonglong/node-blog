<template>
    <div>
        <div v-for="(data,index) in blogList" :key="index" class="content-box">
          <h2>{{data.title}}</h2>
          <el-row :gutter="10">
            <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
              <img :src="data.imgurl" class="image">
            </el-col>
            <el-col :xs="24" :sm="24" :md="16" :lg="16" :xl="16">
              <span>
                {{data.content}}
              </span>
              <el-button type="text" class="button"><router-link :to="{ path:'detail',query:{id:data.id}}">详情</router-link></el-button>
            </el-col>
          </el-row>
          <div class="operate-btn">
            <el-button type="primary" icon="el-icon-caret-top">赞同</el-button>
          </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentDate: new Date(),
            blogList:[]
        };
    },
    mounted(){
        //在页面加载时就触发请求数据的函数
        //用self存储当前组件vue对象的this
        let self = this;
        //使用axios请求数据
        this.axios.get("/api/blog/list")
            .then(function (response) {
                //此处要使用self，如果使用this指向的是axios对象，不再是vue对象
                // self.movieList = response.data;
                self.blogList = response.data.data
                console.log(self.blogList)
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}
</script>

<style scoped>
  h2{
    margin-bottom: 20px;
  }
  .left-image-box{
    width: 195px;
    height: 105px;
    overflow: hidden;
    float: left;
  }
  .image{
    width: 100%;
  }
  .right-content-box{
      margin-left: 215px;
  }
 .content-box{
   padding: 20px;
   min-height: 185px;
 }
 .operate-btn{
   margin-top: 20px;
 }
</style>
