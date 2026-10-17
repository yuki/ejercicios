<script setup>
import { onMounted } from 'vue'
import { useUsuarios } from '../composables/useUsuarios.js'

const { usuarios, cargando, error, obtenerUsuarios } = useUsuarios()

onMounted(obtenerUsuarios)

function eliminar(usuario) {
  usuario.eliminado = true
}
</script>

<template>
  <p v-if="cargando">Cargando usuarios...</p>

  <p v-else-if="error" class="error">
    {{ error }}
  </p>
    <table v-else>
    <thead>
        <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Dirección</th>
            <th>Acciones</th>
        </tr>
    </thead>
    <!-- el name="usuario" sirve para luego la clase de transición en CSS -->
    <Transition
      v-for="usuario in usuarios"
      :key="usuario.id"
      name="usuario"
    >
      <tr v-if="!usuario.eliminado">
        <td>{{ usuario.name }}</td>
        <td>{{ usuario.email }}</td>
        <td>{{ usuario.address?.street }}, {{ usuario.address?.city }}, {{ usuario.address?.zipcode }}</td>
        <td><button @click="eliminar(usuario)">Borrar</button></td>
      </tr>
    </Transition>
  </table>
</template>

<style>
.error {
  width: 80%;
  padding: 1rem;
  background-color: #f8d7da;
  color: #721c24;
  border-radius: 0.5rem;
  border: 1px solid #f5c6cb;
}
table {
  width: 80%;
  border-collapse: collapse;
}
th, td {
  border: 1px solid #ccc;
  padding: 0.5rem;
  text-align: left;
}
th {
  background-color: #f2f2f2;
}


.usuario-enter-active,
.usuario-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.usuario-enter-from,
.usuario-leave-to {
  opacity: 0;
  transform: translateX(-1rem);
}
</style>