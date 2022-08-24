import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ImprintView from '../views/ImprintView.vue'
import PythonSourceCode from '../views/PythonSourceCode.vue'
import Skills from '../views/Skills.vue'

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'home',
		component: HomeView,
	},
	{
		path: '/about',
		name: 'about',
		component: AboutView,
	},
	{
		path: '/imprint',
		name: 'imprint',
		component: ImprintView,
	},
	{
		path: '/skills',
		name: '/skills',
		component: Skills,
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
})

export default router
