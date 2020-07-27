class Persona {
  constructor(nombre, apellidoPaterno, apellidoMaterno, edad, sexo, peso, altura, fechaNacimiento) {
    this._nombre = nombre;
    this._apellidoPaterno = apellidoPaterno;
    this._apellidoMaterno = apellidoMaterno;
    this._edad = edad;
    this._sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this._fechaNacimiento = fechaNacimiento;
  }

  calcularIMC() {
    return this.peso / ((this.altura / 100) * (this.altura / 100));
  }

  esMayorDeEdad() {
    return this._edad >= 18;
  }

  getRFC() {
    return `${this._apellidoPaterno.charAt(0).toUpperCase()}${/[aeiou]/i
      .exec(this._apellidoPaterno)[0]
      .toUpperCase()}${this._apellidoMaterno.charAt(0).toUpperCase()}${this._nombre.charAt(0).toUpperCase()}-${this._fechaNacimiento}-FGR`;
  }
}

const josefabio = new Persona("Jose Fabio", "Arguello", "Loya", 18, "masculino", 50, 170, "010915");
console.log(josefabio.calcularIMC());
