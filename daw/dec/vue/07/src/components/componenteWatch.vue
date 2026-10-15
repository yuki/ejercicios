<script setup>
import { ref, watch } from 'vue'

const contador = ref(0)

watch(contador, (nuevoValor, valorAnterior) => {
  console.log('El contador ha cambiado')
  console.log('Anterior:', valorAnterior)
  console.log('Nuevo:', nuevoValor)
})
function incrementar() {
  contador.value++;
}
</script>
<template>
    <p>Contador: {{ contador }}. Mira los logs!</p>
    <button @click="incrementar">
        Incrementar
    </button>
</template>