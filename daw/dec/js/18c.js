function sumar(a, b, callback) {
    const resultado = a + b;
    callback(resultado);
}

sumar(4, 6, (resultado) => {
    console.log(resultado);
});

sumar(3, 4, (resultado) => {
    let r = document.getElementById("resultado");
    r.textContent = resultado;
});