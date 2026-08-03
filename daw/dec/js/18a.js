function task(message) {
    // emulate time consuming task
    let n = 10000000000;
    while (n > 0){
        n--;
    }
    console.log(message);
}

// programación síncrona
console.log('Start script...');
task('Call an API');
console.log('Done!');


// programación asíncrona y prioridades

console.log("1");

setTimeout(() => {
  console.log("2 - macro-task");
}, 0);

Promise.resolve().then(() => {
  console.log("3 - micro-task");
});

console.log("4");

// ejemplo sencillo instrucciones asíncronas
console.log("Inicio");
setTimeout(() => {
    console.log("Han pasado dos segundos.");
}, 2000);
console.log("Fin");