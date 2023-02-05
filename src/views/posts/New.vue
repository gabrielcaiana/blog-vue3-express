<script lang="ts" setup>
import { DateTime } from 'luxon';
import PostWriter from '~/components/PostWriter/index.vue';
import { Post, TimelinePost } from '~/interfaces/posts';
import { useUsers } from '~/stores/users';
import { useRouter } from 'vue-router';
import { usePosts } from '~/stores/posts';

const usersStore = useUsers();
const posts = usePosts();
const router = useRouter();

if (!usersStore.currentUserId) {
  throw Error('User was not found!');
}

const post: TimelinePost = {
  id: '-1',
  title: 'Title',
  authorId: usersStore.currentUserId,
  created: DateTime.now(),
  markdown: '## Title',
  html: '<h2>Title</h2>',
};

const handleSubmit = async (post: Post) => {
  await posts.createPost(post);
  router.push('/');
};
</script>

<template>
  New Post
  <PostWriter :post="post" @submit="handleSubmit" />
</template>
