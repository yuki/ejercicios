<script setup>
import { ref } from 'vue'

const nombre = ref('')
const errorNombre = ref(false)
const edad = ref(null)
const errorEdad = ref(false)
const pais = ref('')

function enviar() {
  errorNombre.value = nombre.value === ''
  errorEdad.value = edad.value === null || isNaN(edad.value)
  if (errorNombre.value || errorEdad.value) {
    return
  }
  console.log('Formulario correcto')
}
</script>
<template>
  <form @submit.prevent="enviar">
    <div>
        <div>
          <label>
              Nombre:
          <input v-model.trim="nombre">
          </label>
          <span v-if="errorNombre" class="error">
              El nombre es obligatorio.
          </span>
        </div>

        <div>
          <label>
              Edad:
          <input v-model.number="edad" type="number">
          </label>
          <span v-if="errorEdad" class="error">
              La edad es obligatoria.
          </span>
        </div>
  
        <div>
          <label>
            País:
            <select v-model="pais">
              <option value="es">España</option>
              <option value="fr">Francia</option>
              <option value="pt">Portugal</option>
            </select>
          </label>
        </div>
    </div>
    
    <button type="submit">
      Enviar
    </button>
  </form>

  <p v-if="nombre">Hola, {{ nombre }}</p>
  <p v-if="pais">País seleccionado: {{ pais }}</p>
  <p v-if="edad">Edad: {{ edad }}</p>
</template>
<style scoped>
.error {
    color: red; 
}
</style>