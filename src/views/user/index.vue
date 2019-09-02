<template>
    <el-container>
        <div class="content-box">
          <h2>标题</h2>
          <el-row :gutter="10">
            <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
              <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
            </el-col>
            <el-col :xs="24" :sm="24" :md="16" :lg="16" :xl="16">
              <span>
                高阶线性差分方程： 很多答案侧重于不干涉他人自由，讨论『奥特曼』这部作品为什么值得一看的回答不太多。 
                我就写一下这篇回答，内容有限，，只能讲述一点点奥特曼的精髓，权当抛砖引玉了。 言归正传 “没有…
              </span>
              <el-button type="text" class="button"><router-link :to="{ path:'detail',query:{id:'1110'}}">详情</router-link></el-button>
            </el-col>
          </el-row>
          <div class="operate-btn">
            <el-button type="primary" icon="el-icon-caret-top">赞同</el-button>
          </div>
        </div>
    </el-container>
</template>

<script>
export default {
    data() {
        return {
            currentDate: new Date()
        };
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
