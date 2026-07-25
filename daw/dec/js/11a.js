function saludar(nombre="Usuario") {
  console.log(`Hola ${nombre}`);
}

// llamar a la función sin parámetro
saludar();

// llamar a la función con un parámetro
saludar("Alice");

const nombre=prompt("Introduce tu nombre");
saludar(nombre);