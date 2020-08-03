class Colores {
  constructor() {
    this.colores = [];
  }

  getColoresDivididos() {
    var nones = [];
    var pares = [];
    for (var i = 0; i < this.colores.length; i++) {
      if (i % 2) {
        pares.push(this.colores[i]);
      } else {
        nones.push(this.colores[i]);
      }
    }
    return `He dividido la pila en..\nPares:\n${pares}\n\nNones:\n${nones}`;
  }

  addColor(color) {
    this.colores.push(color);
    return `¡Listo, he añadido el color ${color}!`;
  }
}

var colores = new Colores();
["Azul", "Amarillo", "Morado", "Cyan", "Negro", "Rojo", "Café", "Blanco", "Koala"].forEach((color) => {
  colores.addColor(color);
});

console.log(colores.getColoresDivididos());
