var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // push, pop, size
  var obj = {};
  obj.storage = {};
  obj.sizeVal = 0;
  // obj.size = stackMethods.size;
  // obj.push = stackMethods.push;
  // obj.pop = stackMethods.pop;
  _.extend(obj, stackMethods);
  return obj;
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

    var temp = this.storage[this.sizeVal - 1];
    
    delete this.storage.sizeVal;
    this.sizeVal--;
    return temp;
  }
  

};

// var stack1 = Stack();
// // stack1.fun();
// stack1.size;
// console.log(stack1.size);

