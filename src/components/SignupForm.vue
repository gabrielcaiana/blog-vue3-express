<script lang="ts" setup>
import UserForm from '../components/UserForm.vue';
import { useUsers } from '~/stores/users';
import { useModal } from '~/composables/modal';
import { NewUser } from '~/interfaces/user';

const usersStore = useUsers();
const modal = useModal();

const handleSignup = async (newUser: NewUser) => {
  await usersStore.createUser(newUser);
  modal.hideModal();
};
</script>

<template>
  <UserForm @submit="handleSignup" />
</template>
