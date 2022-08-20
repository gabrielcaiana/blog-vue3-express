<script lang="ts" setup>
  import { useModal } from '~/composables/modal'
  import { useUsers } from '~/stores/users';
  import SignupForm from './SignupForm.vue';

  const modal = useModal()
  const usersStore = useUsers()
</script>

<template>
  <div class="navbar">
    <div class="navbar-end">
      <div v-if="usersStore.currentUserId" class="buttons">
        <router-link :to="{ name: 'new-post'}" class="button">New Post</router-link>
        <button class="button" @click="usersStore.logout()">Log Out</button>
      </div>

      <div v-else class="buttons">
        <button class="button" @click="modal.showModal()">Sign Up</button>
        <RouterLink to="/posts/new" class="button">Sign In</RouterLink>
      </div>
    </div>
  </div>

  <Teleport to="#modal">
    <SignupForm />
  </Teleport>
</template>