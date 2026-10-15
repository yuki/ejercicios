<script setup>
import { ref } from 'vue';
import VisualizarDato from './visualizarDato.vue';

const contador = ref(0)

function incrementar() {
  contador.value++
}
</script>
<template>
    <!-- 
       como el prop en el componente hijo y la variable de este componente se llama igual, 
       se puede llamar así también, sin necesidad de poner :contador="contador"
    -->
    <VisualizarDato :contador />
    <button @click="incrementar">
        Incrementar
    </button>
</template>