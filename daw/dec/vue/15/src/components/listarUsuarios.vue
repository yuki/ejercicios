<script setup>
import { onMounted } from 'vue'
import { useUsuarios } from '../composables/useUsuarios.js'

const { usuarios, cargando, error, obtenerUsuarios } = useUsuarios()

onMounted(obtenerUsuarios)
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
        </tr>
    </thead>
    <tr v-for="usuario in usuarios" :key="usuario.id">
      <td>{{ usuario.name }}</td>
      <td>{{ usuario.email }}</td>
      <td>{{ usuario.address?.street }}, {{ usuario.address?.city }}, {{ usuario.address?.zipcode }}</td>
    </tr>
  </table>
</template>

<style scoped>
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
</style>