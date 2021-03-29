import Vue from 'vue'
import vuex from 'vuex'
import app from './modules/app'
import tab from './modules/tab'
import menu from './modules/menu'
import iframe from './modules/iframe'

Vue.use(vuex);

import login from './modules/login'
import themes from './modules/themes'
const store = new vuex.Store({
    modules: {
		app:app,
		tab:tab,
        login: login,
		menu:menu,
		iframe:iframe,
		themes
    }
})
export default store