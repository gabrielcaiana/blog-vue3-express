<script setup lang="ts">
import TimelineItem from '../TimelineItem/index.vue';
import { usePosts } from '~/stores/posts';
import { periods } from '~/constants';

const postsStore = usePosts();
await postsStore.fetchPosts();
</script>

<template>
  <nav class="is-primary panel">
    <span class="panel-tabs">
      <a
        v-for="period in periods"
        :key="period"
        @click="postsStore.setSelectedPeriod(period)"
        :class="{ 'is-active': period === postsStore.selectedPeriod }"
      >
        {{ period }}
      </a>
    </span>

    <TimelineItem
      v-for="post in postsStore.filteredPosts"
      :key="post.id"
      :post="post"
    />
  </nav>
</template>
