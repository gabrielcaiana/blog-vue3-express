const routes = [
  {
    path: "/",
    component: () => import('~/views/Home.vue')
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () => import("~/views/NotFound.vue"),
  },
  {
    path: '/posts/new',
    name: 'new-post',
    component: () => import('~/views/NewPost.vue')
  }
]

export default routes