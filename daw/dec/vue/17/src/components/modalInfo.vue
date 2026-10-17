<script setup>
import { ref } from 'vue'

const open = ref(false)
</script>

<template>
  <button @click="open = true">Open Modal</button>

  <Teleport to="#modals">
    <div v-if="open" class="modal">
        <slot></slot>
        <button @click="open = false">Close</button>
    </div>
  </Teleport>
</template>

<style scoped>
.modal {
  position: fixed;
  z-index: 999;
  top: 20%;
  left: 50%;
  width: 300px;
  margin-left: -150px;
  border: 1px solid black;
  border-radius: 15px;
  padding: 2rem;
}
</style>