const numeros = [10, 20, 30, 40, 50];

// añadir elemento al final
numeros.push(60);
console.log(numeros);

// eliminar último elemento
numeros.pop();
console.log(numeros);

// añadir al inicio
numeros.unshift(5);
console.log(numeros);

// eliminar el primero
numeros.shift();
console.log(numeros);


// obtener una parte del array
const nums = numeros.slice(1, 3);
console.log(nums);


const colores = ["Rojo", "Verde", "Azul"];

// buscar un elemento
console.log(colores.includes("Verde"));

// obtener la posición
console.log(colores.indexOf("Azul"));

// concatenar arrays
const nuevo = numeros.concat(colores);
console.log(nuevo);

const letras = ["C", "A", "B"];
console.log(letras);

// ordenar
letras.sort();
console.log(letras);

// invertir
letras.reverse();
console.log(letras);
// convertir en cadena
console.log(colores.join(", "));
console.log(letras);

// copia superficial de array
let copia = letras;
letras.push("Z");
console.log(letras);
console.log(copia)
console.log(letras===copia)
letras.pop()

// copia profunda de array
copia = structuredClone(letras);
console.log(letras===copia)

letras.push("Z");
console.log(letras);
console.log(copia)
letras.pop()