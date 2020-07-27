const Maestro = require("./index");
class MaestroFisica extends Maestro {
  constructor(materia, calificacionesGrupales, antiguedad) {
    super(materia, calificacionesGrupales);
    this.antiguedad = antiguedad;
  }
}

const maestroF = new MaestroFisica("Fisica", [100, 0], 100);
console.log(maestroF.getPromedio());
