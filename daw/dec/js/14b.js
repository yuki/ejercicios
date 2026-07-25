class Cuenta {
    #saldo;
    constructor(saldo) {
        this.#saldo = saldo;
    }
    getSaldo() {
        this.#privado();
        return this.#saldo;
    }
    #privado() {
        console.log("Priv");
    }
}

const cuenta = new Cuenta(1000);

// obtener dato
console.log(cuenta.getSaldo());

//esto dará error
console.log(cuenta.#privado());

//esto dará error
console.log(cuenta.#saldo);