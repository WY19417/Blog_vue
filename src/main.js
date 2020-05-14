import Vue from 'vue'
import './plugins/axios'
import SuiVue from 'semantic-ui-vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import VueRouter from 'vue-router'
import routes from './routers'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
import './assets/style.css'
import 'semantic-ui-css/semantic.min.css'
import fHeader from './components/f-header'
import fFooter from './components/f-footer'
import i18n from './i18n/i18n'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'



Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(mavonEditor)
Vue.use(SuiVue)
Vue.component("f-header",fHeader)
Vue.component("f-footer",fFooter)
Vue.component("f-footer",fFooter)

//Vue.use(ElementUI, {
//i18n: (key, value) => i18n.t(key, value)
//})

const router =new VueRouter({
	routes,
	mode: 'history'
})

new Vue({
	router,
	i18n,
	render: h => h(App),
}).$mount('#app')
