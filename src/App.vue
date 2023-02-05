<script lang="ts" setup>
import Navbar from '~/components/Navbar/index.vue';
import Modal from '~/components/Modal/index.vue';
</script>

<template>
  <Modal />
  <div class="section">
    <div class="container">
      <Navbar />
      <RouterView />
    </div>
  </div>
</template>
