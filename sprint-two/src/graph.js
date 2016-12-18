

// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
  this.edges = [];

};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.nodes.includes(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var index;
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i] === node) {
      index = i;
    }
  }
  this.nodes.splice(index);
  for (var i = 0; i < this.edges.length; i++) {
    // Includes is constant time (2 operations)
    if (this.edges[i].includes(node)) {
      this.edges.splice(i, 1);
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var foundEdge = false;
  _.each(this.edges, function(edge) {
    if (edge.includes(fromNode) && edge.includes(toNode)) {
      foundEdge = true;
    }
  });
  return foundEdge;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edges.push([fromNode, toNode]);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var index;
  for (var i = 0; i < this.edges.length; i++) {
    if (this.edges[i].includes(fromNode) && this.edges[i].includes(toNode)) {
      index = i;
    }
  }
  this.edges.splice(index, 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  _.each(this.nodes, function(node) {
    cb(node);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addNode: O(1);
 * contains: O(n);
 * removeNode: O(n);
 * hasEdge: O(n);
 * addEdge: O(1);
 * removeEdge: O(n);
 * forEachNode: O(n);
 */


