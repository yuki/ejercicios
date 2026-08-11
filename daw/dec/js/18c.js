// función sumar que recibe dos números y un callback
function sumar(a, b, callback) {
    const resultado = a + b;
    callback(resultado);
}

// llamada a la función sumar con un callback que imprime el resultado
sumar(4, 6, (resultado) => {
    console.log(resultado);
});

// llamada a la función sumar con un callback que actualiza el contenido de un elemento HTML
sumar(3, 4, (resultado) => {
    let r = document.getElementById("resultado");
    r.textContent = resultado;
});


function multiplicar(a, b) {
  return a * b
}

function restar(a, b) {
  return a - b
}

// función calcular que recibe dos números y una operación (callback)
function calcular(num1, num2, operacion) {
  const resultado = operacion(num1, num2)
  console.log('El resultado es: ' + resultado)
  return resultado
}

// llamada a la función calcular con diferentes operaciones
calcular(5, 3, multiplicar);
calcular(5, 3, restar);