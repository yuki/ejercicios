<script setup>
import { ref } from 'vue';

const contador = ref(0);

function incrementar() {
  contador.value++;
}
</script>

<template>
  <p>Contador: {{ contador }}</p>
  
  <button @click="incrementar">
    Incrementar
  </button>
</template>