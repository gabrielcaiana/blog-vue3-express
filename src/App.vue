<script lang="ts" setup>
  import Navbar from './components/Navbar.vue';
</script>

<template>
  <main>
    <div class="section">
      <div class="container">
        <Navbar />
        <RouterView />
      </div>
    </div>
  </main>
</template>
