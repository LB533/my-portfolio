import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Homepage.vue'
import About from '../pages/About.vue'
import Projects from '../pages/Projects.vue'
import Contact from '../pages/Contact.vue'

const routes = [
  { path : '/', name: 'home', component : Home},
  { path : '/about', name: 'about', component : About},
  { path : '/projects', name: 'projects', component : Projects},
  { path : '/contact', name: 'contact', component : Contact}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router