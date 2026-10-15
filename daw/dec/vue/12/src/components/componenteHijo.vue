<script setup>
const emit = defineEmits(['incrementarContador', 'decrementarContador']);

// esta función no se ejecuta nunca porque desde el botón se llama directamente a emit('incrementarContador')
function incrementar() {
  emit('incrementarContador');
}

function decrementar() {
  emit('decrementarContador');
}

</script>
<template>
  <h2>Componente Hijo</h2>
  
  <p>En el botón "incrementar" la función no llama a una función, si no que emite el evento directamente</p>
  <button @click="emit('incrementarContador')">
    Incrementar contador
  </button>
  <button @click="decrementar">
    Decrementar contador
  </button>
</template>