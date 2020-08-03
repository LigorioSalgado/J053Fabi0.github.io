class Node {
  constructor(dato) {
    this.dato = dato;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  add(dato) {
    const node = new Node(dato);
    if (this.head == null) {
      this.head = node;
    } else {
      var currentNode = this.head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }

    this.length++;
  }

  remove(datoBorrar) {
    var currentNode = this.head;
    var previousNode = null;
    if (currentNode.dato === datoBorrar) {
      this.head = currentNode.next;
    } else {
      while (currentNode.dato !== datoBorrar) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = currentNode.next;
    }
    this.length--;
  }

  getNodesAtLevel(level) {
    level -= 1;
    var currentNode = this.head;
    if (currentNode == null) {
      return "No elements";
    }
    for (var i = 0; i < level; i++) {
      if (currentNode.next != null) {
        currentNode = currentNode.next;
      } else {
        break;
      }
    }
    return currentNode;
  }

  getNodesHigherThan(number) {
    var currentNode = this.head;
    if (currentNode == null) {
      return "No elements";
    }
    var resultados = new LinkedList();

    while (currentNode) {
      if (currentNode.dato > number) {
        resultados.add(currentNode.dato);
      }
      currentNode = currentNode.next;
    }
    return resultados.head == null ? "No results" : resultados;
  }
}

var listaNumeros = new LinkedList();
for (var i = 0; i < 4; i++) {
  listaNumeros.add(Math.floor(Math.random() * 100));
}

console.log(JSON.stringify(listaNumeros, null, 3));
console.log(JSON.stringify(listaNumeros.getNodesAtLevel(3), null, 3));
console.log(JSON.stringify(listaNumeros.getNodesHigherThan(90), null, 3));
