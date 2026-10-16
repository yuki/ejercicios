import { ref } from 'vue'

export function useUsuarios() {
  const usuarios = ref([])
  const cargando = ref(true)
  const error = ref('')

  async function obtenerUsuarios() {
    try {
      const respuesta = await fetch('https://jsonplaceholder.typicode.com/users')

      if (!respuesta.ok) {
        throw new Error('No se pudieron cargar los usuarios')
      }

      usuarios.value = await respuesta.json()
    } catch (err) {
      error.value = err.message
    } finally {
      cargando.value = false
    }
  }

  return { 
    usuarios,
    cargando,
    error,
    obtenerUsuarios
  }
}
