const Maestro = require("./index");
class MaestroMusica extends Maestro {
  constructor(materia, calificacionesGrupales, edad) {
    super(materia, calificacionesGrupales);
    this.edad = edad;
  }
}

const maestroM = new MaestroFisica("Música", [100, 0], 20);
console.log(maestroM.getPromedio());
