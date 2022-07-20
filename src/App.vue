<script lang="ts" setup>
  import Navbar from './components/Navbar.vue';
  import FormIput from './components/FormIput.vue';
  import { useModal } from './composables/modal'
  import { computed, ref } from 'vue'

  const username = ref('')

  const modal = useModal()
  const modalStyle = computed(() => {
    return {
      display: modal.show.value ? 'block' : 'none',
    }
  })
</script>

<template>
  <div class="modal" style="color: white;" :style="modalStyle">
    <div class="modal-background">
      <div class="modal-content">
        <div id="modal"></div>
      </div>
    </div>
    <button @click="modal.hideModal()" class="modal-close is-large"></button>
  </div>

  <div class="section">
    <div class="container">
      <FormIput name="Username" v-model="username" />
      <Navbar />
      <RouterView />

      {{ username }}
    </div>
  </div>
</template>
