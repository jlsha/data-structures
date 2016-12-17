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
    console.log(tree);
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
 */
 //use functional shared
// var tree1 = Tree(1); {value: 1, children: []}

// tree1.addChild(3); {value: 1, children: [ {value: 3, children: [] } ]

// tree1.addChild(4); {value: 1, children: [ {value: 3, children: [{value: 8, children: [] }]}, {value: 4, children: [] }]}

// var tree1 = Tree(1);
// console.log("tree1: ", tree1);
// tree1.addChild(2);
// console.log(tree1);

//newTree with keys value and children and method addchild

