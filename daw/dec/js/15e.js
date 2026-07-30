const mensaje = document.querySelector("#mensaje");
// añadir una clase
mensaje.classList.add("destacado");

// togglear una clase
mensaje.classList.toggle("italica");

// ver si tiene una clase
console.log(mensaje.classList.contains("italica"));

// reemplazar una clase
mensaje.classList.replace(
    "destacado", // reemplaza esta clase
    "normal"     // por esta otra
);

// añadir varias clases a la vez
mensaje.classList.add(
    "rojo",
    "grande",
    "centrado"
);

// obtener todas las clases
console.log(mensaje.className);

// modificar todas las clases
mensaje.className = "destacado italica";

console.log(mensaje.className);
