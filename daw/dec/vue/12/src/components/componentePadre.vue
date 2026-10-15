4<script setup>
import { ref } from 'vue';
import ComponenteHijo from './componenteHijo.vue';

const contador = ref(0);

function incrementar() {
  contador.value++;
  console.log('Incrementar contador en el padre');
}

function decrementar() {
  contador.value--;
  console.log('Decrementar contador en el padre');
}

</script>
<template>

<h2>Componente Padre</h2>

<p>El Contador lo modifico a través de los eventos recibidos del hijo: {{ contador }}</p>

<ComponenteHijo
    @incrementarContador="incrementar" 
    @decrementarContador="decrementar" 
/>



<h2 id="ejemplo2">Mira el código de cómo llamo a este hijo</h2>
<p>En lugar de llamar a la función al incrementar, se emite el evento directamente y se hace el console.log.</p>
<p class="danger">No es buena práctica mezclar lógica de negocio con lógica de presentación.</p>
<ComponenteHijo
    @incrementarContador="contador++;console.log('Incrementar contador en el padre')" 
    @decrementarContador="decrementar" 
/>

</template>
<style>
#ejemplo2 {
    margin-top: 4rem;
}

.danger {
    color: red;
}
</style>