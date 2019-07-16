<template>
  <div id="app">
    <el-container>
      <el-header>
        <headerNav></headerNav>
      </el-header>
      <el-container class="page-container">
        <el-main>
          <div class="app-main">
            <router-view/>
          </div>
        </el-main>
        <el-aside width="300px">
          <asideNav></asideNav>
        </el-aside>
      </el-container>
    </el-container>
    <!-- <footerNav></footerNav> -->
  </div>
</template>

<script>
import headerNav from '../src/components/header-nav'
import footerNav from '../src/components/footer-nav'
import asideNav from '../src/components/aside'
export default {
  name: 'App',
  components:{
    headerNav,
    footerNav,
    asideNav
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  header{
    position: relative;
    z-index: 100;
    min-width: 1032px;
    overflow: hidden;
    background: #fff;
    -webkit-box-shadow: 0 1px 3px rgba(26,26,26,.1);
    box-shadow: 0 1px 3px rgba(26,26,26,.1);
    background-clip: content-box;
  }
  .page-container{
    width: 1140px;
    margin: 0 auto;
  }
  .app-main{
    flex-shrink: 0;
    margin-right: 10px;
    margin-bottom: 0;
    -webkit-box-shadow: 0 1px 3px rgba(26,26,26,.1);
    box-shadow: 0 1px 3px rgba(26,26,26,.1)
  }
  .el-aside{
    padding: 20px 5px;
  }
</style>
