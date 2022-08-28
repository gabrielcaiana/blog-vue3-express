<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { usePosts } from '~/stores/posts';
const route = useRoute();
const postsStores = usePosts();

const id = route.params.id as string;
const post = postsStores.all.get(id);

if (!post) {
  throw Error(`Post with id ${id} was not found`);
}
</script>

<template>
  <div class="columns">
    <div class="column"></div>
    <div class="column is-two-thirds">
      {{ post.title }}
      <div v-html="post.html"></div>
    </div>
    <div class="column"></div>
  </div>
</template>
