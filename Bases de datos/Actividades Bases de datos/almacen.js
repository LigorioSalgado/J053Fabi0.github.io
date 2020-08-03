class Almacen {
  constructor() {
    this.productos = [];
  }

  addProducto(producto) {
    this.productos.unshift(producto);
  }

  getProductos() {
    return this.productos;
  }

  quitarProductoID(id) {
    var pos = -1;
    for (var index = 0; index < this.productos.length; index++) {
      var id_temp = this.productos[index].id;

      if (id_temp == id) {
        pos = index;
        break;
      }
    }

    if (pos == -1) {
      return "No he encontrado ese producto. El id no existe.";
    }

    if (pos == 0) {
      this.productos.shift();
      return "Saqué el primer producto muy fácilemente de la lista.";
    }

    var productosSacados = "";
    for (var i = 0; i < pos; i++) {
      productosSacados = productosSacados + this.productos[i].producto + `${i < pos - 1 ? ", " : ""}`;
    }

    return `Para sacar el producto "${
      this.productos[pos].producto
    }" he tenido que sacar primero esto: "${productosSacados}", pero ya los puse en su lugar 👍.\n\nEste fue el objeto eliminado: ${JSON.stringify(
      this.productos.splice(pos, 1)
    )}`;
  }
}

var almacen = new Almacen();

[
  { producto: "Flor", id: 1 },
  { producto: "Carne seca", id: 2 },
  { producto: "Tortillas", id: 3 },
  { producto: "Tamales", id: 4 },
  { producto: "Teclados", id: 5 },
  { producto: "Paletas", id: 6 },
  { producto: "Yoyos", id: 7 },
].forEach((elemento) => {
  almacen.addProducto(elemento);
});

console.log(almacen.quitarProductoID(3));
