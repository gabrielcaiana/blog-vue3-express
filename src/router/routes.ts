import { useUsers } from '~/stores/users';

const routes = [
  {
    path: '/',
    component: () => import('~/views/Home.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('~/views/NotFound.vue'),
  },
  {
    path: '/posts/new',
    name: 'new-post',
    component: () => import('~/views/posts/New.vue'),
    beforeEnter: () => {
      const usersStore = useUsers();
      if (!usersStore.currentUserId) {
        return {
          path: '/',
        };
      }
    },
  },
  {
    path: '/posts/:id',
    component: () => import('~/views/posts/Show.vue'),
  },
  {
    path: '/posts/:id/edit',
    component: () => import('~/views/posts/Edit.vue'),
  },
];

export default routes;
