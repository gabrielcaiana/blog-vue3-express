<script setup lang="ts">
  import TimelineItem from './TimelineItem.vue'
  import { DateTime } from 'luxon';
  import { ref, computed } from 'vue'
  import { TimelinePost, today, thisWeek, thisMonth } from '../interfaces/posts'


  const periods = ['Today', 'This Week', 'This month'] as const;
  
  type Period = typeof periods[number]

  const selectedPeriod = ref<Period>('Today')

  const selectPeriod = (period: Period) => {
    selectedPeriod.value = period
  }

  const posts = computed<TimelinePost[]>(() => {
    return [
      today,
      thisWeek,
      thisMonth
    ]
    .map(post => {
      return {
        ...post,
        created: DateTime.fromISO(post.created)
      }
    })
    .filter(post => {
      if(selectedPeriod.value === 'Today') {
        return post.created >= DateTime.now().minus({ day: 1})
      }

       if(selectedPeriod.value === 'This Week') {
        return post.created >= DateTime.now().minus({ week: 1})
      }

      return post
    })
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

    <TimelineItem v-for="post in posts" :key="post.id" :post="post" />
  </nav>
</template>
