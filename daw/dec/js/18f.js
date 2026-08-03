function nuevaPromesa(valor, numero) {
    return new Promise((resolve, reject) => {
        // Tareas asíncronas
        console.log(`hacemos cosas de ${numero}`);
        
        if (valor) {
            console.log(`Resolviendo promesa ${numero}`);
            resolve(`éxito ${numero}`);
        } else {
            console.log(`Rechazando promesa ${numero}`);
            reject(`error ${numero}`);
        }
    });
}

function  promesaTiempo(nombre, tiempo) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Fin de ${nombre}`)
    }, tiempo)
  })
}


// todas las promesas se van a cumplir
Promise.all([
    nuevaPromesa(true,1),
    nuevaPromesa(true,2),
    nuevaPromesa(true,3)
])
.then((resultados) => {
    console.log("Todas las promesas BIEN!");
    //devuelve un array.
    console.log(resultados);
})
.catch((error) => {
    console.log("esto no debería salir, no?")
});


// Alguna las promesas NO se va a cumplir
Promise.all([
    nuevaPromesa(true,1),
    nuevaPromesa(false,2),
    nuevaPromesa(true,3)
])
.then((resultados) => {
    console.log("Todas las promesas BIEN!");
    console.log(resultados);
})
.catch((error)=> {
    console.log("Alguna ha fallado!!")
    console.log(error);
});


// devuelve la promesa que termina antes!
Promise.race([
    promesaTiempo(1,2000),
    promesaTiempo(2,1000),
    promesaTiempo(3,3000)
])
.then((resultado) => {
    console.log(resultado);
})
.catch((error)=> {
    console.log("Alguna ha fallado!!")
    console.log(error);
});


// se hace un resumen de lo que ha pasado con varias promesas
Promise.allSettled([
    promesaTiempo(1,2000), //éxito con temporizador
    nuevaPromesa(true,2),  //éxito instantáneo
    nuevaPromesa(false,3), //error instantáneo
    promesaTiempo(4,3000)  //éxito con temporizador
])
.then((resultados) => {
    console.log("Resultados de operaciones");
    for (const resultado of resultados) {

        console.log(resultado);

        if (resultado.status === "fulfilled") {
            console.log(`EXITO: ${resultado.value}`)
        } else {
            console.log(`ERROR: ${resultado.reason}`)
        }
    }
})
.catch((error)=> {
    console.log("Alguna ha fallado!!")
    console.log(error);
});