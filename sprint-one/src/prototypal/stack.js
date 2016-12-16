var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(stackMethods);
  newStack.sizeVal = 0;
  newStack.storage = {};
  return newStack;
};

var stackMethods = {};
stackMethods.size = function() {
  return this.sizeVal;
};
stackMethods.push = function(value) {
  this.storage[this.sizeVal] = value;
  this.sizeVal++;
};
stackMethods.pop = function() {
  if (this.sizeVal > 0) {
    this.sizeVal--;
    var tempVal = this.storage[this.sizeVal];
    delete this.storage[this.sizeVal];
    return tempVal;
  }
};

