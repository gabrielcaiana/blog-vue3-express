<script setup lang="ts">
  import { DateTime } from 'luxon';
import { ref } from 'vue'
  import { Post, today, thisWeek, thisMonth } from '../interfaces/posts'

  const periods = ['Today', 'This week', 'This month'] as const;
  
  type Period = typeof periods[number]

  const selectedPeriod = ref<Period>('Today')

  const selectPeriod = (period: Period) => {
    selectedPeriod.value = period
  }

  const posts = [
    today,
    thisWeek,
    thisMonth
  ].map(post => {
    return {
      ...post,
      created: DateTime.fromISO(post.created)
    }
  })
</script>

<template>
  <nav class="is-primary panel">
    <span class="panel-tabs">
    <a 
      v-for="period in periods"
      :key="period"
       @click="selectPeriod(period)"
      :class="{ 'is-active': period === selectedPeriod}">
      {{ period }}
    </a> 
    </span>

    <a
      v-for="post in posts"
      :key="post.id"
      class="panel-block"
    >
      <a>{{ post.title}}</a>
      <div>
        {{ post.created.toFormat('d MMM') }}
      </div>
    </a>
  </nav>
</template>
