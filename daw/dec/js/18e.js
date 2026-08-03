function igual (texto) {
    //devuelve el texto tal cual llega
    console.log(`igual: ${texto}`);
    return texto;
}

function mayus (texto) {
    t = texto.toUpperCase();
    console.log(`mayus: ${t}`);
    return t;
}

function minus (texto) {
    t = texto.toLowerCase();
    console.log(`minus: ${t}`);
    return t;
}

function nuevaPromesa(valor) {
    return new Promise((resolve, reject) => {
        // Tareas asíncronas
        console.log("hacemos cosas");
        
        if (valor) {
            console.log("Resolviendo promesa");
            resolve("Éxito");
        } else {
            console.log("Rechazando promesa");
            reject("Error");
        }
    });
}


// ejemplo escrito 1
// creamos una nueva promesa y en cada "then()" escribimos
// la función flecha a realizar

// const promesa = nuevaPromesa(true)
// promesa
//   .then((respuesta)=>{
//       console.log(`Éxito 1: ${respuesta}`)
//       return respuesta;
//   })
//   .then((respuesta)=> {
//       r = respuesta.toUpperCase();
//       console.log(`Éxito 2: ${r}`);
//       return r;
//   })
//   .then((respuesta)=> {
//       r = respuesta.toLowerCase();
//       console.log(`Éxito 3: ${r}`);
//   })
//   .catch((error)=> {
//       console.log(`Error 1: ${error}`)
//   })
//   .finally(()=>{
//       console.log("Promesa 1 finalizada.")
//   });





// ejemplo escrito 2
// en lugar de escribir la función que queremos realizar, llamamos
// a la función que queremos ejecutar y le pasamos como parámetro
// el resultado del anterior.

// const promesa2 = nuevaPromesa(true)
// promesa2
//   .then(r => igual(r))
//   .then(r => mayus(r))
//   .then(r => minus(r))
//   .catch((error)=> {
//       console.log(`Error 2: ${error}`)
//   })
//   .finally(()=>{
//       console.log("Promesa 2 finalizada.")
//   });




// ejemplo escrito 3
// podemos llamar directamente a las funciones que queremos ejecutar,
// ya que recibirán el resultado del paso anterior.
// Esto es porque el contrato de la función es que reciba un único 
// parámetro y devuelva una promesa, exactamente como la función que 
// ya estamos creando
const promesa3 = nuevaPromesa(true)
promesa3
  .then(igual)
  .then(mayus)
  .then(minus)
  .catch((error)=> {
      console.log(`Error 3: ${error}`)
  })
  .finally(()=>{
      console.log("Promesa 3 finalizada.")
  });