<template>
    <div class="content-box">
        <el-row>
            <el-col :span="24"><el-page-header @back="$router.go(-1)" content=""></el-page-header></el-col>
            <el-col :span="24"><h2 class="detial-title">{{detail.title}}</h2></el-col>
            <el-col :span="24">
                <div class="detail-author">
                    <div><span>作者：{{detail.author}}</span></div>
                    <div><span>发布时间：{{detail.createtime}}</span></div>
                </div>
            </el-col>
            <el-col :span="24">
                <div class="detail-content">
                    <p>
                        {{detail.content}}
                    </p>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    data(){
        return{
            detail:{}
        }
    },
    mounted(){
        //在页面加载时就触发请求数据的函数
        //用self存储当前组件vue对象的this
        let self = this;
        //使用axios请求数据
        this.axios.get("/api/blog/detail?id="+self.$route.query.id)
            .then(function (response) {
                //此处要使用self，如果使用this指向的是axios对象，不再是vue对象
                // self.movieList = response.data;
                // self.blogList = response.data.data
                console.log(self.$route.query.id)
                self.detail =  response.data.data;
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}
</script>

<style>
    .content-box{
        padding: 20px;
    }
    .detial-title{
        text-align: center;
    }
    .detail-author{
        text-align: center;
        line-height: 40px;
    }
</style>
