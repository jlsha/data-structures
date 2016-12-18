

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // this._storage.set(index, [k, v]);
  var myBucket = this._storage.get(index) || [];
  myBucket.push([k, v]);
  this._storage.set(index, myBucket);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var myBucket = this._storage.get(index);
  var result;
  myBucket.forEach(function(tuple) {
    if (tuple.includes(k)) {
      result = tuple[1]; 
    }
  });
  return result;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, []);
};



/*
 * Complexity: What is the time complexity of the above functions?
 * .insert: O(1)
 * .retrieve: O(n)
 * .remove: O(1)
 */


