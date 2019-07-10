<template>
  <div id="app">
    <headerNav></headerNav>
    <router-view/>
    <!-- <footerNav></footerNav> -->
  </div>
</template>

<script>
import headerNav from '../src/components/header-nav'
import footerNav from '../src/components/footer-nav'
export default {
  name: 'App',
  components:{
    headerNav,
    footerNav
  }
}
</script>

<style>

</style>
