
function esperar(mensaje,segundos) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mensaje);
            console.log(mensaje);
        }, segundos);
    });
}

// se ejecutan en secuencial = 6 segundos
function fun1 () {
    console.log("Empezamos 1");
    esperar("1",3000)
      .then(() => esperar("2",2000))
      .then(() => esperar("3",1000))
      .finally(() => {
        console.log("terminado 1");
      })
}

// se ejecutan en secuencial = 6 segundos
async function fun2 () {
    console.log("Empezamos 2");
    await esperar("1",3000);
    await esperar("2",2000);
    await esperar("3",1000);
    console.log("terminado 2");
}

// se ejecutan las 3 tareas en paralelo = 3 segundos
async function fun3 () {
    console.log("Empezamos 3");
    const [dat1, dat2, dat3] = await Promise.all([
        esperar("1",3000),
        esperar("2",2000),
        esperar("3",1000)
    ])
    console.log("Terminamos 3");
}


const boton1 = document.getElementById("boton1");
boton1.addEventListener(
    "click",
    fun1
)

const boton2 = document.getElementById("boton2");
boton2.addEventListener(
    "click",
    fun2
)

const boton3 = document.getElementById("boton3");
boton3.addEventListener(
    "click",
    fun3
)