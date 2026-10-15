<script setup>
import { ref, watchEffect } from 'vue'

const contador1 = ref(0)
const contador2 = ref(0)

watchEffect(() => {
  console.log(`El contador1 es ${contador1.value} y el contador2 es ${contador2.value}`)
})

function incrementar1() {
  contador1.value++;
}
function incrementar2() {
  contador2.value++;
}
</script>

<template>
    <p>Contador1: {{ contador1 }}. Mira los logs!</p>
    <p>Contador2: {{ contador2 }}. Mira los logs!</p>
    <button @click="incrementar1">
        Incrementar 1
    </button>
    <button @click="incrementar2">
        Incrementar 2
    </button>
</template>