import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/IntroductionView.vue'
import ProjectView from '../views/ProjectView.vue'
import MenulistView from '../views/MenulistView.vue'
import Chair from "../components/Chair.vue"
import Lelabo from "@/components/Lelabo.vue";
import Movie from "@/components/Movie.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/project',
    name: 'project',
    component: ProjectView
  },
  {
    path: '/menulist',
    name: 'menulist',
    component: MenulistView
  },
  {
    path: '/chair',
    name: 'Chair',
    component: Chair
  },
  {
    path: '/lelabo',
    name: 'Lelabo',
    component: Lelabo
  },
  {
    path: '/movie',
    name: 'Movie',
    component: Movie
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
