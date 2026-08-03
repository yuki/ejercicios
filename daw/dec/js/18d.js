function nuevaPromesa(valor) {
    return new Promise((resolve, reject) => {
        // Tareas asíncronas
        console.log("hacemos cosas");
        
        if (valor) {
            console.log("Resolviendo promesa");
            resolve("éxito");
        } else {
            console.log("Rechazando promesa");
            reject("error");
        }
    });
}

const promesa = nuevaPromesa(true)
promesa.then((respuesta)=>{
    console.log(`Éxito 1: ${respuesta}`)
})
.catch((error)=> {
    console.log(`Error 1: ${error}`)
})
.finally(()=>{
    console.log("Promesa 1 finalizada.")
});

const promesa2 = nuevaPromesa(false)
promesa2.then((respuesta)=>{
    console.log(`Éxito 2: ${respuesta}`)
})
.catch((error)=> {
    console.log(`Error 2: ${error}`)
})
.finally(()=>{
    console.log("Promesa 2 finalizada.")
});

// promesa con temporizador
const p = new Promise((resolve, reject) => {
    // Tareas asíncronas
    // cambiar a false para ver error
    const success = true;
    
    setTimeout(() => {
      if (success) {
        resolve("éxito")
      } else {
        reject("error")
      }
    }, 1000)
});

p.then((respuesta)=> {
    console.log(`Temporizador ${respuesta}`);
})
.catch((error)=>{
    console.log(`Error temporizador: ${error}`)
})
.finally(()=>{
    console.log("Temporizador finalizado.")
});