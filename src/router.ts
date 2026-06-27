import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Images from './pages/Images.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/photos', name: 'photos', component: Images },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth', top: 80 }
    return { top: 0, behavior: 'smooth' }
  },
})

export default router