<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { useUsuarios } from '../composables/useUsuarios.js'
import { useRoute, useRouter } from 'vue-router'

const { usuarios, cargando, error, obtenerUsuarios } = useUsuarios()
const route = useRoute()

const nombre = route.query.nombre

const nombreBusqueda = computed(() =>
  typeof route.query.nombre === 'string' ? route.query.nombre.trim().toLowerCase() : '',
)
const usuariosFiltrados = computed(() => {
  return usuarios.value.filter((usuario) =>
    usuario.name.toLowerCase().includes(nombreBusqueda.value),
  )
})

onMounted(async () => {
  await obtenerUsuarios()
})
</script>

<template>
  <h1>Usuarios</h1>

  <div class="formulario">
    <!-- <form @submit.prevent="buscarUsuarios">
      <input v-model="nombreFormulario" name="nombre" />
      <button>Buscar</button>
    </form> -->
    <form >
      <input name="nombre" :value=nombre />
      <button>Buscar</button>
    </form>
  </div>

  <p v-if="cargando">Cargando usuarios...</p>

  <p v-else-if="error" class="error">
    {{ error }}
  </p>

  <div  v-else>

    <table>
      <thead>
          <tr>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Dirección</th>
          </tr>
      </thead>
      <tr v-for="usuario in usuariosFiltrados" :key="usuario.id">
        <td><RouterLink :to=/users/+usuario.id>{{ usuario.name }}</RouterLink></td>
        <td>{{ usuario.email }}</td>
        <td>{{ usuario.address?.street }}, {{ usuario.address?.city }}, {{ usuario.address?.zipcode }}</td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
.formulario {
  padding-bottom: 2rem;
}
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