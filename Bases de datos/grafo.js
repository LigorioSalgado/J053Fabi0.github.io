class Node {
  constructor(value) {
    this.value = value;
  }
}

class Graph {
  constructor() {
    this.nodes = [];
    this.edges = [];
  }

  addNode(value) {
    const node = new Node(value);
    this.nodes.push(node);
  }

  getNode(value) {
    if (this.nodes.length == 0) {
      return null;
    }
    for (var i = 0; i < this.nodes.length; i++) {
      if (this.nodes[i].value == value) {
        return this.nodes[i];
      }
    }
    return null;
  }

  addEdge(value1, value2) {
    const nodo1 = this.getNode(value1);
    const nodo2 = this.getNode(value2);
    const edge = [nodo1, nodo2];
    this.edges.push(edge);
  }

  print() {
    for (var i = 0; i < this.edges.length; i++) {
      console.log(`${this.edges[i][0] ? this.edges[i][0].value : "null"} -> ${this.edges[i][1] ? this.edges[i][1].value : "null"}`);
    }
  }

  getMatrix() { //Genial que lo hayas hecho un metedo y no una funcion aparte buena forma de verlo
    const totalNodes = this.nodes.length; //
    var matrix = [];
    for (var i = 0; i < totalNodes; i++) {
      var temp = [];
      for (var j = 0; j < totalNodes; j++) {
        temp.push(0);
        for (var k = 0; k < this.edges.length; k++) {
          if (this.edges[k][0].value == this.nodes[i].value && this.edges[k][1].value == this.nodes[j].value) {
            temp[j] = 1;
            break;//quizas es demasiado rudo aca quizas podrias forzar al cierre de for asignado  k = this.edges.length
          }
        }
      }
      matrix.push(temp);
    }
    return matrix;
  }
}

const mygrafo = new Graph();

[3, 4, 0, 1, 2].forEach((node) => {
  mygrafo.addNode(node);
});

[
  [0, 1],
  [0, 2],
  [1, 2],
  [1, 4],
  [2, 3],
  [3, 4],
].forEach((pair) => {
  mygrafo.addEdge(pair[0], pair[1]);
});

// mygrafo.print();
// console.log(JSON.stringify(mygrafo, null, 2));

console.log(mygrafo.getMatrix());

// Output:
// [
//   [ 0, 1, 0, 0, 0 ],
//   [ 0, 0, 0, 0, 0 ],
//   [ 0, 0, 0, 1, 1 ],
//   [ 0, 1, 0, 0, 1 ],
//   [ 1, 0, 0, 0, 0 ]
// ]
