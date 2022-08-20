import NewPost from '../views/NewPost.vue'

const routes = [
  {
    path: "/",
    component: () => import('../views/Home.vue')
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () => import("../views/NotFound.vue"),
  },
  {
    path: '/posts/new',
    name: 'new-post',
    component: NewPost
  }
]

export default routes