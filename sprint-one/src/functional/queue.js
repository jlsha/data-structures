var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var enCount = 0;
  var deCount = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[enCount] = value;
    enCount++;
  };

  someInstance.dequeue = function() {
    if (enCount - deCount > 0) {
      deCount++;
      return storage[deCount - 1];
    }
  };

  someInstance.size = function() {
    return enCount - deCount;
  };

  return someInstance;
};
