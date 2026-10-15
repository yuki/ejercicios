<script setup>
import { ref } from 'vue'
import ComponenteHijo from './componenteHijo.vue';

const contador = ref(0);
</script>
<template>
    <h2>Componente Padre</h2>

    <h3>Valor de {{contador}}</h3>
    <ComponenteHijo v-model="contador" />
</template>