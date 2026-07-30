const boton = document.querySelector("#boton");
const desactivar = document.querySelector("#desactivar");

function saludar() {
    console.log("Hola");
}

boton.addEventListener("click", saludar);

desactivar.addEventListener("click", () => {
    boton.removeEventListener("click", saludar);
});