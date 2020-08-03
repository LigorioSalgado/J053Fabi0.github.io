class Node {
  constructor(dato, left, right) {
    this.dato = dato;
    this.left = left;
    this.right = right;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  add(dato, maxLevel = -1) {
    var actualLevel = 0;
    if (this.root == null && maxLevel != 0) {
      this.root = new Node(dato, null, null);
      return;
    }

    maxLevel = maxLevel == -1 ? -1 : maxLevel - 1;

    var currentNode = this.root;
    while (true) {
      if (maxLevel >= 0) {
        actualLevel++;
      }
      if (dato < currentNode.dato) {
        if (currentNode.left) {
          currentNode = currentNode.left;
        } else {
          if (actualLevel <= maxLevel || maxLevel < 0) {
            currentNode.left = new Node(dato, null, null);
          }
          return;
        }
      } else {
        if (currentNode.right) {
          currentNode = currentNode.right;
        } else {
          if (actualLevel <= maxLevel || maxLevel < 0) {
            currentNode.right = new Node(dato, null, null);
          }
          return;
        }
      }
    }
  }

  contains(dato) {
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

  getCopy() {
    return JSON.parse(JSON.stringify(this.root));
  }

  getElementsArray() {
    if (this.root == null) {
      return [];
    }

    var copyRoot = this.getCopy(); // Hago una copia, porque abajo iré borrando nodos, y no quiero modificar la original
    var currentNode = copyRoot; // Creo la clásica variable currentNode
    var arr = [currentNode.dato]; // Este array son los elemento que va pisando
    var steps = [currentNode.dato]; // Este son los pasos que ha seguido, para que sepa regresarse

    while (copyRoot.left || copyRoot.right) {
      if (currentNode.left != null) {
        currentNode = currentNode.left;
        arr.push(currentNode.dato);
        steps.push(currentNode.dato);
      } else if (currentNode.right != null) {
        currentNode = currentNode.right;
        arr.push(currentNode.dato);
        steps.push(currentNode.dato);
      } else {
        steps.pop();
        const toDelete = currentNode.dato;

        currentNode = copyRoot;
        do {
          // Debe ser un do while, porque quiero que se corra el código siempre aunque sea una vez
          if (steps.length != 1) {
            for (var i = 1; i < steps.length; i++) {
              var item = steps[i];
              if (currentNode.left) {
                if (currentNode.left.dato == item) {
                  currentNode = currentNode.left;
                }
              } else if (currentNode.right) {
                currentNode = currentNode.right;
              } else {
                steps.pop();
              }
            }
          }

          if (currentNode.left !== null) {
            if (currentNode.left.dato == toDelete) {
              currentNode.left = null;
            }
          } else if (currentNode.right !== null) {
            if (currentNode.right.dato == toDelete) {
              currentNode.right = null;
            }
          }
        } while (currentNode.dato != steps[steps.length - 1]);
      }
    }
    return arr;
  }

  getCountElements() {
    return this.getElementsArray().length;
  }

  getElementsFromLevel(level) {
    var arr = this.getElementsArray();
    var truncatedTree = new Tree();
    arr.forEach((item) => {
      truncatedTree.add(item, level);
    });
    return truncatedTree;
  }
}

function sonIguales(a, b) {
  return JSON.stringify(a) == JSON.stringify(b);
}

var a = new Tree();
var b = new Tree();
var c = new Tree();

[20, 13, 32, 9, 18, 26, 36, 6, 10, 14, 19, 24, 29, 34, 40].forEach((elemento) => {
  a.add(elemento);
});

[20, 13, 32, 9, 18, 26, 36, 6, 10, 14, 19, 24, 29, 34, 40].forEach((elemento) => {
  b.add(elemento);
});

[20, 13, 32, 9, 18, 26].forEach((elemento) => {
  c.add(elemento);
});

console.log("¿A y B son iguales? R: " + sonIguales(a, b));
console.log("¿Pero C y A? R: " + sonIguales(a, c));
console.log("\nLa cantidad de hojas del arbol son: " + a.getCountElements());
console.log("\nEste es el arbol cortado hasta 2 niveles:\n" + JSON.stringify(a.getElementsFromLevel(2), null, 3));
console.log("\nEl arbol transformado a array: [" + a.getElementsArray() + "]");

// Output:
// ¿A y B son iguales? R: true
// ¿Pero C y A? R: false

// La cantidad de hojas del arbol son: 15

// Este es el arbol cortado hasta 2 niveles:
// {
//    "root": {
//       "dato": 20,
//       "left": {
//          "dato": 13,
//          "left": null,
//          "right": null
//       },
//       "right": {
//          "dato": 32,
//          "left": null,
//          "right": null
//       }
//    }
// }

// El arbol transformado a array: [20,13,9,6,10,18,14,19,32,26,24,29,36,34,40]
