var LinkedList = function() {
  // {value: 1, next: {value: 2, next: {value: 3, next: {value:4, next: null}}}}

  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // Create a new node
    var newNode = Node(value);
    // If there's no head
    if (list.head === null) {
      // Set list.head to the new node
      list.head = newNode; 
      // Set list.tail to the new node
      list.tail = newNode;
    } else {
    // Otherwise, if there is people in the line, set the tail to the new node
      // Add the new node to the tail's next property
      list.tail.next = newNode;
      // Set list.tail to the new node
      list.tail = newNode; 
    }
    // Can refactor repeated list.tail
  };

  list.removeHead = function() {
    // Save current head's value to variable
    var oldHead = list.head;
    // Point the head to the old head's next node
    list.head = list.head.next;
    // Return the value of the old head's value
    return oldHead.value;
  };

  list.contains = function(target) {
    // Recursive function to iterate, take in a node
    var findValue = function(node) {
      // Base case: If the current node's value is target, 
      if (node.value === target) {
        // return true
        return true;
      }
      // Base case: If the current node's next property is null, 
      if (node.next === null) {
        //return false (have not hit target)
        return false;
      } else {
      // Else, call the recursive function again on the current node's next property
        return findValue(node.next);
      }
    };
    // Call and return our recursive function on the head (initial call)
    return findValue(list.head);
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addToTail: O(1)
 * removeHead: O(1).
 * contains: O(n).
 */


