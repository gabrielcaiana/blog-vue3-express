<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { useModal } from '~/composables/modal';
import { useUsers } from '~/stores/users';

const router = useRouter();
const modal = useModal();
const usersStore = useUsers();

const logout = async () => {
  await usersStore.logout();
  router.push({ path: '/' });
};
</script>

<template>
  <RouterLink class="has-text-black is-size-4 has-text-weight-medium" to="/"
    >Blog</RouterLink
  >

  <div class="navbar">
    <div class="navbar-end">
      <div v-if="usersStore.currentUserId" class="buttons">
        <router-link :to="{ name: 'new-post' }" class="button"
          >New Post</router-link
        >
        <button class="button" @click="logout">Log Out</button>
      </div>

      <div v-else class="buttons">
        <button class="button" @click="modal.showModal('signUp')">
          Sign Up
        </button>
        <button class="button" @click="modal.showModal('signIn')">
          Sign In
        </button>
      </div>
    </div>
  </div>

  <Teleport to="#modal">
    <component :is="modal.component.value" />
  </Teleport>
</template>
