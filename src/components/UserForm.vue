<script lang="ts" setup>
import FormIput from './FormIput.vue';
import { validate, length, required } from '~/utils/validation';
import { NewUser } from '~/interfaces/user';
import { computed, ref } from 'vue';

const emit = defineEmits<{
  (event: 'submit', paylad: NewUser): void;
}>();

const username = ref('');
const usernameStatus = computed(() =>
  validate(username.value, [required, length({ min: 5, max: 10 })])
);

const password = ref('');
const passwordStatus = computed(() =>
  validate(password.value, [required, length({ min: 10, max: 20 })])
);

const isInvalid = computed(
  () => !usernameStatus.value.valid || !passwordStatus.value.valid
);

const handleSubmit = async () => {
  if (isInvalid.value) return;

  const newUser: NewUser = {
    username: username.value,
    password: password.value,
  };

  try {
    emit('submit', newUser);
  } catch (error) {
    console.log(error);
  }
};
</script>

<template>
  <form class="form" @submit.prevent="handleSubmit">
    <FormIput
      name="Username"
      type="text"
      v-model="username"
      :status="usernameStatus"
    />
    <FormIput
      name="Password"
      type="password"
      v-model="password"
      :status="passwordStatus"
    />
    <button type="submit" class="button" :disabled="isInvalid">Submit</button>
  </form>
</template>

<style lang="css" scoped>
.form {
  background-color: white;
  margin-top: 2rem;
  padding: 1rem;
}
</style>
