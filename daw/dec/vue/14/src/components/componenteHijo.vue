<script setup>
const contador = defineModel()

function update() {
  contador.value++
}
</script>

<template>
    <h2>Componente Hijo</h2>
  <div>Del padre me viene el contador: {{ contador }}, pero lo incremento aquí</div>
  <button @click="update">Increment</button>
</template>