<script setup>
const nombre = "Producto de ejemplo";
const descripcion = "Esta es una descripción del producto de ejemplo.";
const precio = "19.95€";
const imagen = "https://placehold.co/100x150/000000/FFF";
const puntuacion = 4.5;
</script>

<template>
  <div class="tarjeta-producto">
    <img :src="imagen" alt="Imagen del producto" class="imagen-producto" />
    <p class="nombre-producto">{{ nombre }}</p>
    <p class="descripcion-producto">{{ descripcion }}</p>
    <div class="informacion-producto">
        <div>
            <p class="precio-producto">{{ precio }}</p>
            <p class="puntuacion-producto">{{ puntuacion }}/5</p>
        </div>
        <div>
            <button class="boton-comprar">Comprar</button>
        </div>
    </div>
    
  </div>
</template>

<style scoped>
.tarjeta-producto {
  border: 1px solid #ccc;
  border-radius: 1rem;
  padding: 16px;
  margin: 16px;
}

.imagen-producto {
  width: 100px;
  height: 150px;
  object-fit: cover;
  margin:auto;
  margin-bottom: 8px;
  text-align: center;
 display: block;
}

.nombre-producto {
  font-size: 1.5rem;
  margin-bottom: 8px;
  font-weight: bold;
}

.informacion-producto {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.precio-producto {
  font-size: 1.2rem;
  color: #007bff;
  margin-bottom: 8px;
}

.puntuacion-producto {
  font-size: 1rem;
}

.boton-comprar {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}
</style>