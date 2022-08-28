<script lang="ts" setup>
import { DateTime } from 'luxon';
import PostWriter from '~/components/PostWriter.vue';
import { TimelinePost } from '~/interfaces/posts';
import { useUsers } from '~/stores/users';

const usersStore = useUsers();

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
</script>

<template>
  New Post
  <PostWriter :post="post" />
</template>
