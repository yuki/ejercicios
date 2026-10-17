<script setup>
import { ref, markRaw, shallowRef } from 'vue';

import usuarioPerfil from './components/usuarioPerfil.vue';
import usuarioNotificaciones from './components/usuarioNotificaciones.vue';
import usuarioConfiguracion from './components/usuarioConfiguracion.vue';


const vista = shallowRef(usuarioPerfil);

const vista2 = ref(markRaw(usuarioPerfil));

</script>

<template>
  <h1>Componentes dinámicos</h1>

  <p>Alternativa usando shallowRef: hace reactivo el valor de referencia, sin convertir profundamente el objeto almacenado</p>
  <button @click="vista = usuarioPerfil">Perfil</button>
  <button @click="vista = usuarioNotificaciones">Notificaciones</button>
  <button @click="vista = usuarioConfiguracion">Configuración</button>

  <component :is="vista"></component>
  
  <p>Alternativa usando markRaw: indica a Vue que no debe convertir ese objeto en reactivo, aunque se encuentre dentro de una estructura reactiva.</p>
  <button @click="vista2 = markRaw(usuarioPerfil)">Perfil</button>
  <button @click="vista2 = markRaw(usuarioNotificaciones)">Notificaciones</button>
  <button @click="vista2 = markRaw(usuarioConfiguracion)">Configuración</button>

  <component :is="vista2"></component>



</template>

<style scoped></style>
