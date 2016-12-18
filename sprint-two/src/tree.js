var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // create new child Tree and assign it to a value
  var childTree = Tree(value);
  // Push it to newTree.children
  this.children.push(childTree);
  // console.log(childTree);

};

treeMethods.contains = function(target) {
  var result = false;
 
  var findTarget = function(tree) {
    if (tree.value === target) {
      result = true;
    }
    for (var i = 0; i < tree.children.length; i++) {
      if (tree.children[i].value === target ) {
        result = true;
      }
      if (tree.children[i].children.length > 0 && !result) {
        findTarget(tree.children[i]);
      }
    }
  };
  findTarget(this);
  return result;
};
  

// tree.children[1].addChild(8);


/*
 * Complexity: What is the time complexity of the above functions?
 * addChild: O(1)
 * contains: O(n)
 */

