const numeros = [4, 8, 15, 23];
console.log("uso de break")
for (const numero of numeros) {
    console.log(numero)
    if (numero === 15) {
        console.log("Encontrado");
        break;
    }
}

console.log("uso de continue")
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i);
}