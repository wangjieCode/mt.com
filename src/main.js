import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import '@/assets/css/main.css'
Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.directive('decoument-click', {
	bind(el, binging, vnode) {
		document.addEventListener('click', binging.value,false)
	}
})
new Vue({
  router,
	render: h => h(App)
}).$mount('#app')
