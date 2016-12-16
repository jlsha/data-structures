var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.enCount = 0;
  this.deCount = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function (value) {
  this.storage[this.enCount] = value;
  this.enCount++;
};

Queue.prototype.dequeue = function() {
  if (this.enCount - this.deCount > 0) {
    this.deCount++;
    return this.storage[this.deCount - 1];
  }
};

Queue.prototype.size = function() {
  console.log('this.enCount: ', this.enCount);
  console.log('this.deCount: ', this.deCount);
  return this.enCount - this.deCount;
};
