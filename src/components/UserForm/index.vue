<script lang="ts" setup>
import FormInput from '../FormInput/index.vue';
import { validate, length, required } from '~/utils/validation';
import { NewUser } from '~/interfaces/user';
import { computed, ref } from 'vue';

defineProps<{
  error?: string;
}>();

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
  } catch (e) {
    console.log(e);
  }
};
</script>

<template>
  <form class="form" @submit.prevent="handleSubmit">
    <FormInput
      name="Username"
      type="text"
      v-model="username"
      :status="usernameStatus"
    />

    <FormInput
      name="Password"
      type="password"
      v-model="password"
      :status="passwordStatus"
    />
    <div class="is-danger help" v-if="error">
      {{ error }}
    </div>

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
