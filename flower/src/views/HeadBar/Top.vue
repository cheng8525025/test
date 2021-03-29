
<template>
  <div class="topBox" :class="'topBox'+getTheme()">
    <div class="contant yu-content-oper">
      <div class="yu-content-oper-bank">
        <ul class="custom-ul ul-sel-list">
          <li class>客户</li>
          <li class>商机</li>
          <li class="selected">产能</li>
        </ul>
        <input placeholder="请输入关键字" />
        <i class="el-icon-search"></i>
      </div>
      <div
        class="yu-systool yu-content-oper-modify"
        @mouseenter="fadeFn(1)"
        @mouseleave="fadeFn(0)"
      >
	    <color-picker class="hideTheme" ref="themePick"></color-picker>
        <i class="el-icon-themes" >{{$t('common.theme')}}</i>
        <transition name="fade">
          <ul v-show="fadeShow" class="custom-thmems-list">
            <el-scrollbar style="height:200px;">
              <div class="custom-thmems-list-item-box">
                <li class="custom-thmems-list-item">
                  <i class>{{$t('common.skin')}}</i>
                  <ul class="web-skin-list">
                    <li
                      class="skin-body-white"
                      :style="{backgroundColor:(index>=3?'#4F4E6E':'#fff')}"
                      v-for="(i,index) in getColorArr()"
                      :key="index"
                      @click="changeSkin(index)"
                    >
                      <div class="skin-main" :class="'skin-'+i">
                        <i class="rigthIcon" v-if="index==getColorIndex()"></i>
                      </div>
                    </li>
                  </ul>
                </li>
                <li class="custom-thmems-list-item">
                  <i class>{{$t('common.pattern')}}</i>
                  <ul class="web-mode-list web-mode-list2">
                    <li class="web-mode-list-item" @click="changeCss(0)">
                      <div class="mode-vertical mode-left"></div>
                      <div class="mode-top"></div>
                      <i class="rigthIcon" v-show="modelFlag==0"></i>
                    </li>
                    <li class="web-mode-list-item" @click="changeCss(1)">
                      <div class="mode-vertical mode-right"></div>
                      <div class="mode-top"></div>
                      <i class="rigthIcon" v-show="modelFlag==1"></i>
                    </li>
                    <li class="web-mode-list-item" @click="changeCss(2)">
                      <div class="mode-only-top"></div>
                      <i class="rigthIcon" v-show="modelFlag==2"></i>
                    </li>
                  </ul>
                </li>
                <li class="custom-thmems-list-item">
                  <i class>{{$t('common.language')}}</i>
                  <ul class="web-mode-list">
                    <div class="el-radio-group">
                      <el-radio v-model="radio" :label="1" @change="changeLanguage('zh_cn')">中文</el-radio>
                      <el-radio v-model="radio" :label="2" @change="changeLanguage('en_us')">English</el-radio>
                    </div>
                  </ul>
                </li>
              </div>
            </el-scrollbar>
          </ul>
        </transition>
      </div>
      <div class="yu-content-oper-logout">
        <i @click="logout" class="el-icon-switch-button">{{$t('common.exit')}}</i>
      </div>
      <div class="yu-content-oper-uinfo">
        <div class="userImg">
          <img id="userPic" src="~assets/yusys/home/user_default_pic.png" title="..." />
        </div>
        <span class="txt-userinfo">
          <em id="userName">YUFP</em>
          <em id="userRole" class="user-ul-val">{{$t('common.administrator')}}</em>
          <ul class="user-ul ul-sel-list">
            <li class="selected">{{$t('common.administrator')}}</li>
          </ul>
        </span>
        <div class="downBox">
          <i class="el-icon-arrow-down"></i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import store from "../../store/index";
import { mapState, mapMutations, mapGetters } from "vuex";
import colorPicker from "@/components/theme";
const ORIGINAL_THEME = "#409EFF"; //默认的主题色
export default {
  store,
  name: "top",
  components:{
	  colorPicker  //主题色主键
  },
  data() {
    return {
	  themeColor:ORIGINAL_THEME, //当前的主题背景色
      radio: 1,
      modelFlag: 0,
      fadeShow: 0
    };
  },
  methods: {
    ...mapMutations([
      "setLogining" ,"setColorIndex",'setLayout'
    ]),
    ...mapGetters(['getColorArr','getColorTheme','getTheme',"getColorIndex",'getLayout']),
    changeSkin(i) {
      this.setColorIndex([i])
	  this.themeColor = this.getTheme(); //获取当前的主题色
	  var son  = this.$refs.themePick.theme = this.getColorTheme();
    },
    changeCss(i) {
      this.modelFlag = i;
      this.setLayout(i)
    },
    fadeFn(i) {
      this.fadeShow == i ? "" : (this.fadeShow = i);
    },
    logout() {
      this.setLogining(false);
	  sessionStorage.setItem('user','')
      this.$router.push({
        path: "/login",
        params: {}
      });
    },
	changeLanguage(lang) {
		localStorage.setItem('language',lang)
		lang === '' ? 'zh_cn' : lang
		this.$i18n.locale = lang
	}
  },
  mounted() {
    if (this.login.logining) {
      //store状态的值刷新后被初始化
      console.log("我已经登录了");
    } else {
      console.log("请登录");
    }
  },
  computed: {
    ...mapState({
      login: "login"
    })
  }
};
</script>
<style lang="less" scoped>
.hideTheme{
	display: none;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.web-skin-list {
  .skin-blue {
    background-image: url(~assets/yusys/home/blue.png);
  }
  .skin-orange {
    background-image: url(~assets/yusys/home/orange.png);
  }
  .skin-red {
    background-image: url(~assets/yusys/home/red.png);
  }
}
.web-mode-list2 {
  margin-top: 10px;
}
.topBoxred {
  background-image: url("~assets/yusys/home/redBg.png") !important;
}
.topBoxorange {
  background-image: url("~assets/yusys/home/orangeBg.png") !important;
}
.topBox {
  height: 60px;
  background-image: url("~assets/yusys/home/Bg.png");
  background-size: 100% 100%;
  .contant {
    display: flex;
    height: 60px;
    justify-content: flex-end;
  }
  .yu-content-oper > div {
    position: relative;
    margin-left: 30px;
    color: #fff;
    text-align: left;
    white-space: nowrap;
    letter-spacing: 0.67px;
    font-size: 12px;
    line-height: 60px;
    transition: all 0.2s linear;
    cursor: pointer;
  }
  .yu-content-oper-bank {
    padding-right: 8px;
    padding-left: 8px;
    height: 24px;
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 15px;
    color: #fff;
    letter-spacing: 0;
    font-size: 12px;
    font-family: MicrosoftYaHei;
    line-height: 24px !important;
    top: 19px;
    input {
      display: inline-block;
      width: 100px;
      outline: 0;
      border-width: 0;
      background-color: transparent;
      color: #fff;
      letter-spacing: 0;
      font-size: 12px;
    }
    input::-webkit-input-placeholder {
      color: #fff;
    }
    input::-moz-input-placeholder {
      color: #fff;
    }
    input::-ms-input-placeholder {
      color: #fff;
    }
    .ul-sel-list {
      display: inline-block;
      z-index: 33;
      color: #000;
      text-align: center;
      letter-spacing: -0.09px;
      font-size: 12px;
      li {
        display: inline-block;
        background-color: rgba(255, 255, 255, 0.5);
        color: #fff;
        border-radius: 9px;
        width: 40px;
        height: 18px;
        line-height: 19px;
        margin: 3px 3px;
      }
    }
  }

  .custom-thmems-list {
    transition: all 0.2s linear;
    position: absolute;
    top: 44px;
    width: 174px;
    line-height: normal;
    box-sizing: border-box;
    background-color: #fff;
    z-index: 200;
    box-shadow: 0 32px 32px 0 rgba(48, 48, 77, 0.05),
      0 16px 16px 0 rgba(48, 48, 77, 0.05), 0 8px 8px 0 rgba(48, 48, 77, 0.05),
      0 4px 4px 0 rgba(48, 48, 77, 0.05), 0 2px 2px 0 rgba(48, 48, 77, 0.05);
    border-radius: 2px;
  }
  .custom-thmems-list-item-box {
    padding: 10px 5px 15px 10px;
    margin: 0 auto;
  }

  .custom-thmems-list-item {
    margin: 0 auto;
    i {
      margin-left: 4px;
      padding-bottom: 4px;
      color: #19233c;
      font-size: 12px;
      letter-spacing: -0.07px;
      font-style: normal;
      border-bottom: 2px solid #19233c;
    }
    .web-skin-list {
      .skin-main {
        position: absolute;
        width: 100%;
        height: 38px;
      }
      .web-mode-list-item {
        background-image: linear-gradient(-269deg, #3a3897 0%, #74b1ff 100%);
        background: #6b9eee;
        .mode-left {
          float: left;
          box-shadow: inset -1px 0 0 0 #ffffff, inset 0 -1px 0 0 #e5e9f2;
        }
      }
      .rigthIcon {
        padding: 0;
        color: #fff;
        font-size: 0.75rem;
        letter-spacing: -0.004375rem;
        font-style: normal;
        border-bottom: none;
        background-image: url(~assets/yusys/home/correct.png);
      }
      .skin-main > i,
      .web-mode-list-item > .el-icon-circle-check-outline {
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -7px;
        margin-left: -7px;
        display: inline-block;
        width: 14px;
        height: 14px;
        border-radius: 50%;
      }
      overflow: hidden;
      margin-top: 10px;
      li {
        position: relative;
        box-sizing: border-box;
        float: left;
        width: calc((100% - 19px) / 3);
        height: 50px;
        margin: 5px 3px;
        border: 1px solid #e5e9f2;
      }
    }
  }
  .custom-thmems-list-item > ul > li {
    position: relative;
    box-sizing: border-box;
    float: left;
    width: calc((100% - 19px) / 3);
    height: 50px;
    margin: 5px 3px;
    border: 1px solid #e5e9f2;
  }
  .web-mode-list {
    overflow: hidden;
  }
  .el-radio-group {
    margin-top: 10px;
    .el-radio {
      margin: 0;
    }
  }
  .web-mode-list-item {
    background-image: linear-gradient(-269deg, #3a3897 0%, #74b1ff 100%);
    background: #6b9eee;
    .mode-left {
      float: left;
      box-shadow: inset -1px 0 0 0 #ffffff, inset 0 -1px 0 0 #e5e9f2;
    }
    .rigthIcon {
      padding: 0;
      color: #fff;
      font-size: 0.75rem;
      letter-spacing: -0.004375rem;
      font-style: normal;
      border-bottom: none;
      background-image: url(~assets/yusys/home/correct.png);
      position: absolute;
      top: 50%;
      left: 50%;
      margin-top: -0.4375rem;
      margin-left: -0.4375rem;
      display: inline-block;
      width: 0.875rem;
      height: 0.875rem;
      border-radius: 50%;
    }
    .mode-vertical {
      width: 10px;
      height: 49px;
    }
    .mode-right {
      float: right;
      box-shadow: inset 1px 0 0 0 #e5e9f2, inset 0 -1px 0 0 #e5e9f2;
    }
    .mode-only-top {
      width: 100%;
      height: 7px;
      box-shadow: inset 0 -1px 0 0 #ffffff;
    }
    .mode-top {
      width: calc(~"100% - 10px");
      height: 7px;
      box-shadow: inset 0 -1px 0 0 #ffffff;
    }
    .mode-left + .mode-top {
      float: right;
    }
  }
  .custom-thmems-list-item {
    i {
      margin-left: 4px;
      padding-bottom: 4px;
      color: #19233c;
      font-size: 12px;
      letter-spacing: -0.07px;
      font-style: normal;
      border-bottom: 2px solid #19233c;
    }
  }
  .yu-content-oper-uinfo {
    display: flex;
    .userImg {
      display: flex;
      align-items: center;
    }
    span {
      display: block;
      line-height: 100%;
    }
    img {
      width: 28px;
      height: 28px;
      float: left;
    }
    .txt-userinfo:hover .ul-sel-list {
      display: block;
    }
    .txt-userinfo {
      position: relative;
      em {
        display: block;
        margin: 0;
        padding: 0;
        height: 28px;
        letter-spacing: 0;
        font-style: initial;
        font-size: 12px;
        line-height: 38px;
        font-style: normal;
      }
      #userRole {
        font-size: 10px;
        color: #ffffff;
        letter-spacing: 0;
        opacity: 0.5;
        line-height: 16px;
      }
      .downBox {
        margin-right: 10px;
        display: flex;
        align-items: center;
        i {
          padding-bottom: 5px;
        }
      }
    }
    .ul-sel-list {
      position: absolute;
      z-index: 33;
      right: 12px;
      display: inline-block;
      display: none;
      margin-left: -10px;
      border-radius: 2px;
      background-color: #fff;
      box-shadow: 0 32px 32px 0 rgba(48, 48, 77, 0.05),
        0 16px 16px 0 rgba(48, 48, 77, 0.05), 0 8px 8px 0 rgba(48, 48, 77, 0.05),
        0 4px 4px 0 rgba(48, 48, 77, 0.05), 0 2px 2px 0 rgba(48, 48, 77, 0.05);
      color: #000;
      text-align: center;
      letter-spacing: -0.09px;
      font-size: 14px;
      line-height: 40px;
      li {
        padding: 0 10px;
      }
    }
  }
}
</style>