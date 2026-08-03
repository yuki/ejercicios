console.log("Inicio");
const id = setTimeout(() => {
    console.log("Han pasado tres segundos.");
}, 3000);
console.log("Fin");


const id2 = setTimeout(() => {
    console.log("Han pasado cinco segundos.");
}, 5000);

setTimeout(() => {
    console.log("Cancelado temporizador de 5 al de 2 segundos");
    clearTimeout(id2);
}, 2000);


const date = setInterval(() => {
    console.log(new Date());
}, 1000);

let contador = 0;

const reloj = setInterval(() => {
    contador++;
    console.log(contador);

    if (contador === 10) {
        clearInterval(reloj);
    }
}, 1000);