import { createRouter, createWebHashHistory } from 'vue-router'
import IsAll from '../pages/IsAll.vue'
import IsDoing from '../pages/IsDoing.vue'
import IsDone from '../pages/IsDone.vue'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: IsAll
	},
	{
		path: '/IsAll',
		name: 'IsAll',
		component: IsAll
	},
	{
		path: '/IsDoing',
		name: 'IsDoing',
		component: IsDoing
	},
	{
		path: '/IsDone',
		name: 'IsDone',
		component: IsDone
	},
]

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

export default router
