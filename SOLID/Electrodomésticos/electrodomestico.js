class Electrodomestico {
  constructor(precio, color, capacidad) {
    this.precio = precio;
    this.color = color;
    this.capacidad = capacidad;
    this.consumoEnergetico = 100;
  }
}

class Labadora extends Electrodomestico {
  constructor(precio, color, capacidad, carga) {
    super(precio, color, capacidad);
    this.carga = carga;
  }

  precioFinal() {
    return this.carga * this.consumoEnergetico;
  }
}
