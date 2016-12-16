var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.sizeVal = 0;
};

Stack.prototype.push = function (value) {
  this.storage[this.sizeVal] = value;
  this.sizeVal++;
};

Stack.prototype.pop = function () {
  if (this.sizeVal > 0) {
    var temp = this.storage[this.sizeVal - 1];
    delete this.storage.sizeVal;
    this.sizeVal--;
    return temp;
  }
};

Stack.prototype.size = function() {
  return this.sizeVal;
};