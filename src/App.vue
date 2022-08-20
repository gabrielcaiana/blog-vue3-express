<script lang="ts" setup>
  import Navbar from './components/Navbar.vue';
  import Modal from './components/Modal.vue';
  import { useUsers } from './stores/users'

  const usersStore = useUsers()
  usersStore.authenticate()
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
