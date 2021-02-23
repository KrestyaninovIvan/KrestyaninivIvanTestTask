import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {layout: 'main'},
    props: true,
    component: ()=> import('../views/Home.vue')
  },
  {
    path: '/UserCard:id',
    name: 'UserCard',
    meta: {layout: 'main'},
    props: true,
    component: ()=> import('../components/UserCard.vue')
  },
  {
    path: '/search:id',
    name: 'Search',
    meta: {layout: 'main'},
    props: true,
    component: ()=> import('../components/Search.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

