import { createRouter, createWebHistory } from "vue-router"

import Home from "./pages/Home.vue"
import Images from "./pages/Images.vue"

const routes = [
    { path: '/', name:"home", component: Home },
    { path: '/photos', name:"photos", component: Images },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;