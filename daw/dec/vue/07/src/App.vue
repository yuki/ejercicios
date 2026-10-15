<script setup>
import ComponenteComputed from './components/componenteComputed.vue';
import ComponenteReactive from './components/componenteReactive.vue';
import ComponenteRef from './components/componenteRef.vue';
import ComponenteWatch from './components/componenteWatch.vue';
import ComponenteWatchEffect from './components/componenteWatchEffect.vue';

</script>

<template>
  <h1>Componentes reactivos</h1>
  
  <h2>Componente con "ref()"</h2>
  <ComponenteRef />

  <h2>Componente con "reactive()"</h2>
  <ComponenteReactive />

  <h2>Componente "computed()"</h2>
  <ComponenteComputed />

  <h2>Componente "watched()"</h2>
  <ComponenteWatch />

  <h2>Componente "watchEffect()"</h2>
  <ComponenteWatchEffect />
</template>

<style scoped></style>
