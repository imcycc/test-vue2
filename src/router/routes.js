
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/TestEvent',
    name: 'TestEvent',
    component: () => import(/* webpackChunkName: "TestEvent" */ '../views/TestEvent.vue')
  },
  {
    path: '/TestDrag',
    name: 'TestDrag',
    component: () => import(/* webpackChunkName: "TestDrag" */ '../views/TestDrag.vue')
  },
  {
    path: '/TestChildRender',
    name: 'TestChildRender',
    component: () => import(/* webpackChunkName: "TestChildRender" */ '../views/TestChildRender')
  },
]

export default routes