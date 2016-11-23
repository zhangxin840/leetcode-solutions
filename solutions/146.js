// Constrains:
// used - getted or set
// key - string, object key
// value - only int, can be positive
// capacity >= 1
// LRU size - 100 items

// Test Cases:
// Get('a') => 1 or -1
// Set('a', 1) => 1

// Ideas:

// Basic: indexing and shifting

// Queue:
// - Doubly linked list
// - When used, move the node to the head.
// - When reached capacity, remove the tail.
// Time: Get:O(N) Set:O(N)
// Space: O(N)

// Queue + hash:
// Use hash to speed up indexing
// Time: Get:O(1) Set:O(1)
// Space: O(N) - cloud lose control of size growing up.

// Enhancements:
// Indexing should be faster
/**
 * @constructor
 */
var LRUCache = function (capacity) {
  this.queue = [];
  this.capacity = capacity;
};

LRUCache.prototype.shiftToTail = function (queue, i) {
  var node = queue.splice(i, 1)[0];
  queue.push(node);
};
/**
 * @param {number} key
 * @returns {number}
 */
LRUCache.prototype.get = function (key) {
  for (var i = 0; i < this.queue.length; i++) {
    if (this.queue[i].key === key) {
      this.shiftToTail(this.queue, i);
      return this.queue[this.queue.length - 1].value;
    }
  }

  return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @returns {void}
 */
LRUCache.prototype.set = function (key, value) {
  var isInCache = false;
  for (var i = 0; i < this.queue.length; i++) {
    if (this.queue[i].key === key) {
      this.queue[i].value = value;
      this.shiftToTail(this.queue, i);
      isInCache = true;
      break;
    }
  }

  if (!isInCache) {
    if (this.queue.length >= this.capacity) {
      this.queue.shift();
    }
    this.queue.push({
      key: key,
      value: value
    });
  }
};
