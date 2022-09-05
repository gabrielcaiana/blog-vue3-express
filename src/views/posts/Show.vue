<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { usePosts } from '~/stores/posts';
import { useUsers } from '~/stores/users';
import { computed } from 'vue';

const route = useRoute();
const postsStores = usePosts();
const userStore = useUsers();

const id = route.params.id as string;
const post = postsStores.all.get(id);

if (!post) {
  throw Error(`Post with id ${id} was not found`);
}

const canEdit = computed(() => {
  if (!userStore.currentUserId) {
    return false;
  } else if (userStore.currentUserId !== post.authorId) {
    return false;
  } else {
    return true;
  }
});
</script>

<template>
  <div class="columns">
    <div class="column"></div>
    <div class="column is-two-thirds">
      <RouterLink
        v-if="canEdit"
        :to="`/posts/${post.id}/edit`"
        class="is-link button is-rounded"
        >Edit post</RouterLink
      >
      <h1>{{ post.title }}</h1>
      <div v-html="post.html"></div>
    </div>
    <div class="column"></div>
  </div>
</template>
