function getN_ElementsArray(pila, cantidad) {
  return pila.slice(0, cantidad);
}

function remplazar(array, nuevoNum, cantidadQuitar) {
  array.splice(array.length - cantidadQuitar, cantidadQuitar, nuevoNum);
  return array;
}

console.log(getN_ElementsArray([1, 2, 3, 4, 5], 3)); // Salida: [1,2,3]

console.log(remplazar([1, 2, 3, 4], 8, 2)); // Salida: [1,2,8]
