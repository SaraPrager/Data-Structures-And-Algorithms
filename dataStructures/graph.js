// An Adjacent list implementation of undirected, unweight graph
class Graph {
    constructor() {
      this.adjacentList = {};
    }

    addVertex(node) {
      if (this.adjacentList[node]) {
        Throw(new Error("Node already exists!"));
      }
      this.adjacentList[node] = [];
    }

    addEdge(node1, node2) {
      if (this.adjacentList[node1] == null) {
        this.addVertex(node1);
      }

      if (this.adjacentList[node2] == null) {
        this.addVertex(node2);
      }

      this.adjacentList[node1].push(node2);
      this.adjacentList[node2].push(node1);
    } 

    showConnections() {
      Object.keys(this.adjacentList).forEach(node => {
        const connections = this.adjacentList[node].join();
        console.log(node + "-->" + connections); 
      });
    } 
}