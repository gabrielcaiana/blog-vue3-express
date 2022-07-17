<script lang="ts" setup>
  import { useModal } from '../composables/modal'

  const modal = useModal()

</script>

<template>
  <div class="navbar">
    <div class="navbar-end">
      <div class="buttons">
        <button class="button" @click="modal.showModal()">Sign Up</button>
        <router-link to="/posts/new" class="button">New Post</router-link>
      </div>
    </div>
  </div>

  <Teleport to="#modal">
    Content to be rendered in the modal
  </Teleport>
</template>