<template>
    <div class="page-container clearfix">
       <h2 class="app-title">node 博客</h2>
       <div class="app-user">
            <el-button type="primary" size="small" round @click="$router.push({path:'/generate'})">生成微信头像</el-button>
            <el-button type="primary" size="small" round @click="$router.push({path:'/new-blog'})">写博客</el-button>
            <el-button type="success" size="small" round>我的博客</el-button>
       </div>
       <!-- <el-menu :default-active="activeIndex" class="el-menu-demo hidden-md-and-up" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">首页</el-menu-item>
            <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
            <el-submenu class="submenu" index="2">
                <template slot="title">我的</template>
                <el-menu-item index="2-1" @click="$router.push({path:'/new-blog'})">写博客</el-menu-item>
                <el-menu-item index="2-2">我的博客</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
            </el-submenu>
        </el-menu> -->
    </div>
</template>

<script>
export default {
    data(){
        return{
            activeIndex: '1',
            a:"aaaaa",
        }
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>

<style scoped>
    .el-header{
        padding: 00;
    }
    .app-title{
        height: 60px;
        line-height: 60px;
        padding: 0 20px;
        float: left;
    }
    .app-user{
         float: right;
         margin-top: 10px;
        padding: 0 20px;
    }
    .el-menu-demo{
        margin-left: 160px;
    }
    .submenu{
        float: right;
    }
</style>
