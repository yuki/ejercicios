let elemento = document.querySelector("#javascript");
// obtener el padre de un elemento
console.log(elemento.parentElement);

const lista = document.getElementById("lista");
// obtener primer hijo
console.log(lista.firstElementChild);
// último hijo
console.log(lista.lastElementChild);

// todos los hijos
console.log(lista.children);

for (const elemento of lista.children) {
    console.log(elemento.textContent);
}

// hermano siguiente
console.log(elemento.nextElementSibling);

// hermano anterior
console.log(elemento.previousElementSibling);

// recorrer hermanos desde el que estoy

while (elemento) {
    console.log(elemento.textContent);
    elemento = elemento.nextElementSibling;
}