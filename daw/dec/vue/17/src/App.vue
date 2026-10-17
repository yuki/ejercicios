<script setup>
import modalInfo from './components/modalInfo.vue';

</script>

<template>
  <h1>Ejemplo de Teleport</h1>
  <p>El componente modal se renderiza en el div con id "modals" del documento, fuera del div con id app.</p>
  <p>Busca dónde está ese id.</p>

  <modalInfo>
    <h2>Hola!</h2>
  </modalInfo><br/>
  <modalInfo>
    <h2>Adios!</h2>
  </modalInfo>
</template>

<style scoped></style>
