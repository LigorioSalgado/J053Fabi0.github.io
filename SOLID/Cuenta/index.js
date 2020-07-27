class Cuenta {
  constructor(titular, cantidad) {
    this._titular = titular;
    this.cantidad = cantidad;
  }

  ingresar(cantAIngresar) {
    if (cantAIngresar >= 10 && cantAIngresar <= 900) {
      this.cantidad = this.cantidad + cantAIngresar;
      return "Listo. Ahora tiene " + this.cantidad + `, señor ${this._titular}`;
    } else {
      return "No puedes ingresar menos de 10, ni más de 900";
    }
  }

  retirar(cantARetirar) {
    if (cantARetirar >= 10 && cantARetirar <= 900) {
      this.cantidad = this.cantidad - cantARetirar;
      return "Listo. Ahora tienes " + this.cantidad + `, señor ${this._titular}`;
    } else {
      return "No puedes retirar menos de 10, ni más de 900";
    }
  }
}

var cuentaChida = new Cuenta("Jose Fabio", 100);
console.log(cuentaChida.ingresar(11));
console.log(cuentaChida.retirar(50));
