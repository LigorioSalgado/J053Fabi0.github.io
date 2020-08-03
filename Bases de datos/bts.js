class Node {
  constructor(dato, left, right) {
    this.dato = dato;
    this.left = left;
    this.right = right;
  }
}

class Tree {
  // Tiene el método agregar nodo
  // Tiene el método "verificar si existe el nodo"

  constructor() {
    this.root = null;
  }

  add(dato) {
    if (this.root == null) {
      // Si no hay root aún
      this.root = new Node(dato, null, null);
      return; // Aquí acaba de añadir el root
    }

    var currentNode = this.root;
    while (true) {
      if (dato < currentNode.dato) {
        // Si el dato va a la izquierda
        if (currentNode.left) {
          // Si hay un nodo a la derecha, pues a repetir el proceso
          currentNode = currentNode.left;
        } else {
          // Si no, pues aquí se crea uno nuevo
          currentNode.left = new Node(dato, null, null);
          return;
        }
      } else {
        if (currentNode.right) {
          currentNode = currentNode.right;
        } else {
          currentNode.right = new Node(dato, null, null);
          return;
        }
      }
    }
  }

  contains(dato) {
    // Solo verifica si existe el dato en el arbol. Retorna true o false
    var currentNode = this.root;
    while (currentNode) {
      if (currentNode.dato == dato) {
        return true;
      }
      if (dato < currentNode.dato) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return false;
  }
}

var tree = new Tree();

[30, 40, 45, 2, 35, 2, 45, 52].forEach((elemento) => {
  tree.add(elemento);
});

console.log(JSON.stringify(tree, null, 2));
console.log(tree.contains(35));
