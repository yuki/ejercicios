function nuevoElemento() {
    const e = document.createElement("li");
    e.textContent = "elemento";
    const l = document.getElementById("lista");
    l.append(e);
}

const boton = document.querySelector("#boton");

boton.addEventListener(
    "click",
    function () {
        console.log("Botón 1 pulsado.");
        nuevoElemento();
    }
);

const boton2 = document.getElementById("boton2");

boton2.addEventListener(
    "click",
    ()=> {
        console.log("Botón 2 pulsado");
        nuevoElemento();
    }
)

const boton3 = document.getElementById("boton3");

boton3.addEventListener(
    "click",
    nuevoElemento
)
