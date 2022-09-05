import { createApp } from 'vue';
import App from './App.vue';
import { useUsers } from '~/stores/users';
import { usePosts } from './stores/posts';
import { createPinia } from 'pinia';
import router from './router';
import 'bulma/css/bulma.min.css';
import 'highlight.js/styles/tomorrow-night-bright.css';
import './styles/global.css';

const app = createApp(App);

app.use(createPinia());

const usersStore = useUsers();
const postsStore = usePosts();

Promise.all([usersStore.authenticate(), postsStore.fetchPosts()]).then(() => {
  app.use(router);
  app.mount('#app');
});
