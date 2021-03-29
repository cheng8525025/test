<template>
  <div id="app">
    <div id='routerBox'>
      <keep-alive>
        <transition name="fade">
          <router-view v-if="$route.meta.keepAlive"></router-view>
        </transition>
      </keep-alive>
      <transition name="fade">
        <router-view v-if="!$route.meta.keepAlive">
          <!-- 这里是不被缓存的视图组件！ -->
        </router-view>
      </transition>
    </div>

  </div>
</template>

<style lang="less">
  @import '~vux/src/styles/reset';
  body {
   // background-color: @bg;
    line-height: 1.2;
  }
  html,body,#app,#routerBox{
    height: 100%;
  }
  li{
    list-style: none;
  }
</style>
<script>
  import store from './store'
  import {mapMutations} from 'vuex'
  export default {
    store,
    data() {
      return {
        isShow: true
      }
    },
    components: {
    },
    methods: {
      // ...mapMutations(['set_app_tabbar_indexApp']),
      fetchDate() {
        let router = this.$route.path;
        console.log(router)
        if (router == '/home' || router == '/application' || router == '/mysettings' || router == '/dist/' || router == '/signatureCode') {
          this.isShow = true;
          switch (router) {
            case '/home':
              // store.dispatch('set_app_tabbar_indexApp', 0);
              break;
            case '/application':
              // store.dispatch('set_app_tabbar_indexApp', 1);
              break;
            case '/mysettings':
              // store.dispatch('set_app_tabbar_indexApp', 2);
              break;
            case '/signatureCode':
              // store.dispatch('set_app_tabbar_indexApp', 3);
              break;
            default:
              // store.dispatch('set_app_tabbar_indexApp', 0);
          }
        } else {
          // this.isShow = false;
        }
      }
    },
    watch: {
      "$route": "fetchDate"
    }
  }

</script>
