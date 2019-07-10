<template>
    <el-row :gutter="20">
        <el-col :xs="12" :sm="8" :md="6" v-for="(o) in 4" :key="o">
            <el-card :body-style="{ padding: '0px' }">
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
            <div style="padding: 14px;">
                <span>好吃的汉堡</span>
                <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button"><router-link :to="{ path:'detail',query:{id:'1110'}}">详情</router-link></el-button>
                </div>
            </div>
            </el-card>
        </el-col>
    </el-row>
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

<style>
 .el-col {
   margin-bottom: 20px;
  }
 .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>
