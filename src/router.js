import Vue from 'vue'
import Router from 'vue-router'
import defaultPage from '@/layout/default'

import index from './page/index.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
	base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
			name: 'defaultPage',
			component: defaultPage,
			redirect: "/index",
			children:[
				{
					path: "index",
					name: "index",
					component: index,
				},
				{
					path: "ChangeCity",
					name: "ChangeCity",
					component: () => import('./page/changeCity'),
				}
			]
		},
  ]
})
