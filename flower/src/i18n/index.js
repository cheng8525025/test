import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)
 
// 注册i18n实例并引入语言文件，文件格式等下解析
var language = localStorage.getItem('language');

const i18n = new VueI18n({
  locale: language ? language : 'zh_cn', //从缓存中获取国际化语言，没有默认中文
  messages: {
    'zh_cn': require('@/dataMock/languages/zh_cn.json'),
    'en_us': require('@/dataMock/languages/en_us.json')
  }
})

export default i18n