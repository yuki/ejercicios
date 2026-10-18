<script setup>
import { onMounted } from 'vue'
import { useUsuarios } from '../composables/useUsuarios.js'

import { useRoute, useRouter } from 'vue-router'

const { usuario, cargando, error, obtenerUsuarioId } = useUsuarios()

const route = useRoute()
const router = useRouter()
const idUser = Number(route.params.id)

onMounted(()=>{
    if (!Number.isInteger(idUser) || idUser <= 0) {
        // si el ID no es número o <0 volvemos a /users
        router.push('/users')
    } else {
        obtenerUsuarioId(idUser)
    }
})
</script>
<template>
  <p v-if="cargando">Cargando usuario...</p>

  <p v-else-if="error" class="error">
    {{ error }}
  </p>

  <div v-else>
    <h1>{{ usuario.name }}</h1>
    <ul>
        <li><strong>email:</strong> {{ usuario.email }}</li>
        <li><strong>phone:</strong> {{ usuario.phone }}</li>
        <li><strong>website:</strong> {{ usuario.website }}</li>
        <li><strong>address:</strong> {{ usuario.address.street }} {{ usuario.address.suite}} {{ usuario.address.city }}</li>
    </ul>

    <strong>Company name:</strong> {{ usuario.company.name }}

  </div>
</template>
