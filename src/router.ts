import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("./views/NotFound.vue"),
    },
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue')
    }
  ]
})