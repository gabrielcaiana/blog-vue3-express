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
    component: () => import('~/views/NewPost.vue'),
    beforeEnter: () => {
      const usersStore = useUsers();
      if (!usersStore.currentUserId) {
        return {
          path: '/',
        };
      }
    },
  },
];

export default routes;
