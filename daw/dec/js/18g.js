function task(message) {
    // emulate time consuming task
    let n = 10000000000;
    while (n > 0){
        n--;
    }
    console.log(message);
}

function esperar() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Finalizado");
        }, 2000);
    });
}


const boton1 = document.getElementById("boton1");

boton1.addEventListener(
    "click",
    ()=> {
        console.log("Botón 1 pulsado");
    }
)

const boton2 = document.getElementById("boton2");

boton2.addEventListener(
    "click",
    ()=> {
        console.log("Botón 2 pulsado");
        task("tarea larga");
        console.log("Fin 2 pulsado");
    }
)

const boton3 = document.getElementById("boton3");

boton3.addEventListener(
    "click",
    async ()=> {
        console.log("Botón 3 pulsado");
        await esperar();
        console.log("Fin 3 pulsado");
    }
)