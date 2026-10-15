<script setup>
import { ref, computed } from 'vue'

const nombre = ref('Alice')
const apellidos = ref('Doe')

const precio = ref(25)
const cantidad = ref(0)

const total = computed(() => {
  return precio.value * cantidad.value
})

const nombreCompleto = computed(() => {
  return `${nombre.value} ${apellidos.value}`
})

function incrementar() {
  cantidad.value++;
}
</script>
<template>
  <p>Hola {{ nombreCompleto }}, el total de {{precio}} x {{cantidad}} es: {{ total }}</p>
  <button @click="incrementar">
    Incrementar cantidad
  </button>
</template>
