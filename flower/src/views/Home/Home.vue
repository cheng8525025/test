<template>
  <div class="container" :class="'layout'+getLayout()">
    <!-- 导航菜单栏 -->
    <nav-bar class="navBar"></nav-bar>
    <top class="topBar"></top>
    <!-- 主内容区域 -->
    <main-content class="mainContent"></main-content>
  </div>
</template>

<script>
import top from "../HeadBar/Top";
import NavBar from "../NavBar/NavBar";
import MainContent from "../MainContent/MainContent";
import { mapGetters } from "vuex";
export default {
  methods: {
  ...mapGetters(['getColor','getLayout']),
  },
  components: {
    NavBar,
    MainContent,
    top
  }
};
</script>

<style scoped lang="less">
.container {
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px; 
  .navBar {
    position: fixed;
    top: 0px;
    left: 0;
    bottom: 0;
    z-index: 1020;
    
  }
  .topBar{
    left:200px;
    width: calc(~"100% - 200px");
    position:relative;
  }
  .mainContent {
    width: calc(~"100% - 200px");
    height: calc(~"100% - 65px");
    //padding: 0 5px 5px;
    position: absolute;
    top: 60px;
    left: 200px;
    right: 1px;
    bottom: 0px;
    overflow: auto;
  }
}
.layout1{
  .navBar{
    left:auto;
    right: 200px;
  }
  .topBar{
    left: 0px;
  }
  .mainContent{
    left:0px
  }
}
</style>  