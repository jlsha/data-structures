var BinarySearchTree = function(value) {
  // Create an empty bst
  var bst = {};
  // Set left property
  bst.left = null;
  // Set right property
  bst.right = null;
  // Set value property
  bst.value = value;
 
  // Create INSERT function, passing in value as parameter
  bst.insert = function(value) {
    // Compare value passed in to current tree's value property
    // If value is less than the current tree/node value
    if (value < bst.value) {
      // If current tree's left property is null
      if (bst.left === null) {
        // Set current tree's left property to a new tree with the input value
        bst.left = BinarySearchTree(value);
      } else {
        // Else call insert on current tree's left property
        bst.left.insert(value);
      }
    }
    // If value is greater than current tree's value
    if (value > bst.value) {
      // If the current tree's right property is null
      if (bst.right === null) {
        // Set current tree's right property to a new tree with the input value
        bst.right = BinarySearchTree(value);
      } else {
        // Else call insert of current tree's right property
        bst.right.insert(value);
      }
    }
  };
  // Create CONTAINS function, accepts a value, returns boolean
  bst.contains = function (value) {
    // Compare input value to the current tree's value
    // If input value is equal to current tree's value
    if (value === bst.value) {
      // return true
      return true;
    }
    // If input value is less than current tree's value
    if (value < bst.value) {
      // If current tree's left property is not null
      if (bst.left) {
        // Call contains on the current tree's left property
        return bst.left.contains(value);
      }
    }
    // If input value is greater than current tree's value
    if (value > bst.value) {
      // If current tree's right property is true
      if (bst.right) {
        // Call contains on the current tree's right property
        return bst.right.contains(value);
      }
    }
    // Return false (no match found)
    return false;
  };
  // Create DEPTHFIRSTLOG function, accepts a callback, executes on every value in the tree
  bst.depthFirstLog = function (callback) {
    // Call the callback passing in the current tree's value property
    callback(bst.value);
    // If the current tree's left property is true, 
    if (bst.left) {
      // then depthFirstLog on the left property
      bst.left.depthFirstLog(callback);
    }
    // If the current tree's right property is true
    if (bst.right) {
      // then depthFirstLog on the right property
      bst.right.depthFirstLog(callback);
    }
  };
  return bst;
}; 

/*
 * Complexity: What is the time complexity of the above functions?
 * bst.insert: O(log n)
 * bst.contains: O(log n)
 * bst.depthFirstLog: O(1)
 */
