<script lang="ts" setup>
  import FormIput from './FormIput.vue';
  import { validate, length, required } from '../utils/validation'
  import { computed, ref } from 'vue'

  const username = ref('')
  const usernameStatus = computed(() => validate(username.value, [required, length({min: 5, max: 10})]))

  const password = ref('')
  const passwordStatus = computed(() => validate(password.value, [required, length({min: 10, max: 20})]))
</script>

<template>
  <div class="form">
    <FormIput name="Username" v-model="username" :status="usernameStatus" />
    <FormIput name="Password" v-model="password" :status="passwordStatus" />
  </div>
</template>

<style lang="css" scoped>
  .form {
    background-color: white;
    margin-top: 2rem;
    padding: 1rem;
  }
</style>
