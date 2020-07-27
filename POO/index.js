class Estudiante {
  // this quiere decir scope
  // El scope es donde viven las variables
  constructor(name, age, numberLectures) {
    this.name = name;
    this.age = age;
    this.numberLectures = numberLectures;
  }

  // Un método es como una función
  aprender(tema) {
    return "Estoy aprendiendo el tema de " + tema + ", y soy yo, " + this.name;
  }
}

var leonardito = new Estudiante("Leonardo", 12, 10);
console.log(leonardito.aprender("ir al baño"));
