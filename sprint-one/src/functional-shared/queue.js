var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  obj.storage = {};
  obj.enCount = 0;
  obj.deCount = 0;
  obj.enqueue = queueMethods.enqueue;
  obj.dequeue = queueMethods.dequeue;
  obj.size = queueMethods.size;
  return obj;
};

var queueMethods = {};
queueMethods.enqueue = function (value) {
  this.storage[this.enCount] = value;
  this.enCount++;
};
queueMethods.dequeue = function () {
  var tempValue = this.storage[this.deCount];
  delete this.storage[this.deCount];
  this.deCount++;
  return tempValue;
};
queueMethods.size = function () {
  return Object.keys(this.storage).length;
};
