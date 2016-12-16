var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  newQueue.enCount = 0;
  newQueue.deCount = 0;
  newQueue.storage = {};
  return newQueue;
};

var queueMethods = {};
queueMethods.enqueue = function(value) {
  this.storage[this.enCount] = value;
  this.enCount++;
};
queueMethods.dequeue = function () {
  if (this.enCount - this.deCount) {
    this.deCount++;
    return this.storage[this.deCount - 1];
  }
};
queueMethods.size = function () {
  return this.enCount - this.deCount;
};

