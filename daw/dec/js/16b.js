function nuevoElemento() {
    const e = document.createElement("li");
    e.textContent = "elemento";
    const l = document.getElementById("lista");
    l.append(e);
}

function saludar() {
    console.log("Desde saludar()")
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

// añadir más eventos al botón 1

boton.addEventListener(
    "mouseenter",
    () => { console.log("Ratón encima.");}
);

boton.addEventListener(
    "mouseleave",
    () => { console.log("Ratón sale del botón.");}
);

// añadir más al evento click
boton.addEventListener(
    "click",
    () => console.log("Evento 2 click")

);

boton.addEventListener(
    "click",
    () => console.log("Evento 3 click")
);

// de esta forma sólo se ejecuta el segundo evento
boton.onclick = function (){
    console.log("Hola");
}

boton.onclick = function (){
    console.log("Adios");
}

boton.addEventListener(
    "click",
    (e) => {
        console.log(e);
    }

);