class Cuenta {

    #saldo;

    constructor(saldo) {
        this.#saldo = saldo;
    }

    get saldo() {
        return this.#saldo;
    }
    set saldo(valor) {
        if (valor >= 0) {
            this.#saldo = valor;
        }
    }
}

const cuenta = new Cuenta(100);

console.log(cuenta.saldo);
cuenta.saldo = 500;
console.log(cuenta.saldo);