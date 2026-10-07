<script setup>
import TarjetaProducto from './packages/tarjetaProducto.vue';

</script>

<template>
  <h1>Productos</h1>

  <div id="productos">
    <TarjetaProducto />
    <TarjetaProducto />
    <TarjetaProducto />
    <TarjetaProducto />
    <TarjetaProducto />
    <TarjetaProducto />
  </div>

</template>

<style scoped>
#productos {
  display: flex;
  flex-wrap: wrap;

}
</style>
