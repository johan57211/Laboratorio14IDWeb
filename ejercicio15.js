class Cuenta {
    #saldo;

    constructor(saldoInicial = 0) {
        this.#saldo = saldoInicial;
    }

    get saldo() {
        return this.#saldo;
    }

    depositar(monto) {
        if (monto > 0) {
            this.#saldo += monto;
            console.log(`Depósito de $${monto.toFixed(2)} realizado. Saldo actual: $${this.#saldo.toFixed(2)}`);
        } else {
            console.log("El monto debe ser mayor a 0.");
        }
    }

    retirar(monto) {
        if (monto > 0 && monto <= this.#saldo) {
            this.#saldo -= monto;
            console.log(`Retiro de $${monto.toFixed(2)} realizado. Saldo actual: $${this.#saldo.toFixed(2)}`);
        } else {
            console.log("Fondos insuficientes o monto inválido.");
        }
    }

    transferir(monto, cuentaDestino) {
        if (monto > 0 && monto <= this.#saldo) {
            this.retirar(monto);
            cuentaDestino.depositar(monto);
            console.log(`Transferencia de $${monto.toFixed(2)} realizada correctamente.`);
        } else {
            console.log("No se pudo realizar la transferencia.");
        }
    }
}

class CuentaAhorro extends Cuenta {
    retirar(monto) {
        if (monto > 0 && monto <= this.saldo) {
            super.retirar(monto);
        } else {
            console.log("No puedes retirar más de tu saldo en una cuenta de ahorro.");
        }
    }
}

class CuentaCorriente extends Cuenta {
    constructor(saldoInicial = 0, limiteSobregiro = 500) {
        super(saldoInicial);
        this.limiteSobregiro = limiteSobregiro;
    }

    retirar(monto) {
        if (monto > 0 && monto <= this.saldo + this.limiteSobregiro) {
            let nuevoSaldo = this.saldo - monto;
            Reflect.set(this, "#saldo", nuevoSaldo); 
            console.log(`Retiro de $${monto.toFixed(2)} realizado. Saldo actual: $${nuevoSaldo.toFixed(2)}`);
        } else {
            console.log("Monto inválido o supera el límite de sobregiro.");
        }
    }
}

let ahorro = new CuentaAhorro(1000);
let corriente = new CuentaCorriente(500, 300);

ahorro.retirar(200);
corriente.retirar(700);
ahorro.transferir(100, corriente);
