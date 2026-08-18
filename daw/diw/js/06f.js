const textoInvisible = document.querySelector("#textoInvisible");
const cajaInvisible = document.querySelector("#cajaInvisible");

const cajaOpaca = document.querySelector("#cajaOpaca");
const textoOpaco = document.querySelector("#textoOpaco");

textoInvisible.addEventListener("click", (e) => {
    console.log("Clickado invisible");
});

cajaInvisible.addEventListener("click", (e) => {
    console.log("Clickado invisible");
});

cajaOpaca.addEventListener("click", (e) => {
    console.log("Clickado opacos");

});

textoOpaco.addEventListener("click", (e) => {
    console.log("Clickado opacos");

});