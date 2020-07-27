class Maestro {
  constructor(materia, calificacionesGrupales) {
    this._materia = materia;
    this._calificacionesGrupales = calificacionesGrupales;
  }

  getPromedio() {
    var promedio = 0;
    for (var i = 0; i < this._calificacionesGrupales.length; i++) {
      promedio += this._calificacionesGrupales[i];
    }
    promedio = promedio / this._calificacionesGrupales.length;
    return promedio;
  }
}

module.exports = Maestro;
