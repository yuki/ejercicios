<script setup>
import { reactive } from 'vue'

const usuario = reactive({
  nombre: 'Alice',
  edad: 20,
})

function incrementar() {
  usuario.edad++;
}

usuario.nombre = 'Bob'
usuario.edad = 21
</script>
<template>
  <p>{{ usuario.nombre }}</p>
  <p>{{ usuario.edad }}</p>

  <button @click="incrementar">
    Incrementar edad
  </button>
</template>
