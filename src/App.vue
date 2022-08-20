<script lang="ts" setup>
  import Navbar from './components/Navbar.vue';
  import Modal from './components/Modal.vue';

  const authenticate = async () => {
    const res = await window.fetch("/api/current-user", {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    console.log(await res.json())
  }

  authenticate()

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
