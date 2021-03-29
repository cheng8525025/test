<template>
  <div class="login" id='login'>
    <div class="header">
      <img src="../../assets/yusys/login/0.png" alt />
      <p>YUFP统一前端平台</p>
    </div>
    <div class="center">
        <div class="yu-centerPic"></div>
      <div class="yu-loginBox">
        <h1>用户登录</h1>
        <ul>
          <li>
            <input class="yu-lbTxt" id="username" type="text" value="admin" placeholder="用户名" />
            <i class="el-icon-yx-user"></i>
          </li>
          <li>
            <input class="yu-lbTxt" id="password" type="password" value="admin" placeholder="密码" />
            <i class="el-icon-yx-lock"></i>
          </li>
          <li>
            <input class="yu-lbBt" id="submitBtn" type="button" value="登　录"   @click="loginHome" />
          </li>
          <li>
            <span class="yu-loginMsg el-icon-yx-warning" id="msg">用户名或密码错误，请重新输入！</span>
          </li>
        </ul>
      </div>
    </div>
    <div id="versionInfo" class="yu-bottomBar">Copyright © 宇信科技</div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import { Tab, TabItem, XInput, Alert, Toast } from "vux";
import store from "../../store/index";
//import Cookies from "js-cookie"

export default {
  store,
  name: "login",
  components: {
    Tab,
    TabItem,
    XInput,
    Alert,
    Toast
  },
  data() {
    return {
      loginType: "1", //1为账号登录 2为短信登录
      uname: "admin",
      upass: "123456",
      position: "default",
      showPositionValue: false,
      toastName: "", //提示名称
      isshow: false //是否显示密码
    };
  },
  methods: {
    ...mapMutations([
      "setLogining" // 将 `this.incrementBy(amount)` 映射为 `this.$store.commit('incrementBy', amount)`
    ]),
    showPosition: function(position, tip) {
      this.position = position;
      this.showPositionValue = true;
      this.toastName = tip;
    },
    loginHome: function() {
      console.log("进入登陆页面");
      if (this.uname == "admin" && this.upass == "123456") {
        //Cookies.set('token','111111');
        this.setLogining(true);
		sessionStorage.setItem('user',this.uname)
		  this.$router.push('/')  // 登录成功，跳转到主页// 登录成功，跳转到主页，没有后台 直接login
/*        this.$router.push({//
          path: "/home",
          params: {}
        }); */
      } else {
        this.showPosition("middle", "请输入正确的用户名密码！");
      }
    },
    changeLogin: function(type) {
      //切换登录方式
      this.loginType = type;
    },
    hidepass: function() {
      this.isshow = !this.isshow;
    }
  },
  created() {},
  watch: {
    index: "index_change"
  }
};
</script>

<style lang="less" scoped>
.login{
    width: 100%;
    height: 100%
}
.header {
  display: flex;
  align-items: center;
  height: 80px;
  margin-left: 20px;

  p {
    margin-left: 10px;
    font-size: 24px;
  }
}
.center{
    width:100%;
    height: calc(~"100% - 160px");
    background: #406987;
}
.yu-loginBox {
    position: absolute;
    z-index: 2;
    width: 320px;
    height: 320px;
    right: 50%;
    top: 50%;
    margin-right: -520px;
    margin-top: -160px;
    background: rgba(255,255,255,.85);
    box-shadow: 0 2px 5px rgba(0,0,0,.15);
    overflow: hidden;
}
.yu-centerPic {
    width: 900px;
    height: 468px;
    position: absolute;
    top: 50%;
    margin-top: -234px;
    z-index: 2;
    left: 50%;
    margin-left: -600px;
    background: url(../../assets/yusys/login/1.png) left center no-repeat;
}
.yu-loginBox>h1 {
    display: block;
    height: 54px;
    line-height: 84px;
    font-size: 20px;
    font-weight: normal;
    text-align: center;
    color: #20a0ff;
    overflow: hidden;
}
 .yu-loginBox>ul {
    display: block;
    margin: 20px 25px 0 25px;
}
.yu-loginBox>ul>li {
    padding: 10px 0;
    list-style: none;
    position: relative;
}
.yu-lbTxt {
    width: 266px;
    font-size: 14px;
    border: 1px #b9daf3 solid;
    background-color: #fff;
    height: 40px;
    line-height: 42px;
    vertical-align: middle;
    border-radius: 20px;
    text-indent: 45px;
}
.yu-lbTxt:focus{ 
    outline: none;
     border-color: #20a0ff;
}
#login .yu-loginBox>ul>li>i {
    display: block;
    position: absolute;
    width: 30px;
    height: 16px;
    line-height: 16px;
    left: 8px;
    top: 25px;
    text-align: center;
    color: #bbb;
    font-size: 16px;
    border-right: 1px #e5e5e5 solid;
}
#login .yu-lbBt {
    box-sizing: border-box;
    background-color: #20a0ff;
    border-bottom: 2px #0d8eee solid;
    height: 42px;
    border-radius: 21px;
    color: #fff;
    font-size: 18px;
    position: relative;
    display: block;
    width: 270px;
    border: 0;
    outline: 0;
    transition: .2s;
}
#login .yu-loginMsg {
    display: none;
    color: #ff4949;
}
.yu-bottomBar {
    position: absolute;
    z-index: 1;
    bottom: 0;
    width: 100%;
    text-align: center;
    height: 120px;
    line-height: 42px;
    font-size: 12px;
    color: #999;
    background-color: #fff;
}
</style>
