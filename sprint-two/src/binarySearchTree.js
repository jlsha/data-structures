var BinarySearchTree = function(value) {
  // Create an empty bst
  // Set left property
  // Set right property
  // Set value property

  // Create INSERT function, passing in value as parameter
    // Compare value passed in to current tree's value property
    // If value is less than the current tree/node value
      // If current tree's left property is null
        // Set current tree's left property to input value
      // Else call insert on current tree's left property
    // If value is greater than current tree's value
      // If the current tree's right property is null
        // Set current tree's right property to input value
      // Else call insert of current tree's right propert

  // Create CONTAINS function, accepts a value, returns boolean
    // Compare input value to the current tree's value
    // If input value is equal to current tree's value
      // return true
    // If input value is less than current tree's value
      // If current tree's left property is true
        // Call contains on the current tree's left property
    // If input value is greater than current tree's value
      // If current tree's right property is true
        // Call contains on the current tree's right property
    // Return false (no match found)

  // Create DEPTHFIRSTLOG function, accepts a callback, executes on every value in the tree
    // Call the callback passing in the current tree's value property
    // If the current tree's left property is true, then depthFirstLog on the left property
    // If the current tree's right property is true, then depthFIrstLog on the right property
}; 


/*
 * Complexity: What is the time complexity of the above functions?
 */
