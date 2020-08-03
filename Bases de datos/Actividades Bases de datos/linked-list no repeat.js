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
        if (currentNode.dato == dato) {
          return "Ese ya existe, menso";
        }
        currentNode = currentNode.next;
      }

      if (currentNode.dato == dato) {
        return "Ese ya existe, menso";
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
}

var lista = new LinkedList();
["1", "2", "3", "4", "1", "2", "3", "4"].forEach((item) => {
  lista.add(item);
});
console.log(JSON.stringify(lista, null, 3));
