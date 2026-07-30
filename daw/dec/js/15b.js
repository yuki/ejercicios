console.log(document.getElementById("titulo"));

console.log("coger un selector");
console.log(document.querySelector("p"));

console.log("Listar todos los párrafos");
for (const parrafo of document.querySelectorAll("p")) {
    console.log(parrafo);
}

console.log("Listar todos los párrafos dentro de contenido");
let section = document.getElementById("contenido");

for (const cont of section.querySelectorAll("p")) {
    console.log(cont);
}
