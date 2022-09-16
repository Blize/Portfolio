import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ImprintView from '../views/ImprintView.vue'
import SkillsView from '../views/SkillsView.vue'

const DeveloperView = () => import('../views/DeveloperView.vue')

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
		name: 'skills',
		component: SkillsView,
	},
	{
		path: '/developer',
		name: 'developer',
		component: DeveloperView,
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
})

export default router
