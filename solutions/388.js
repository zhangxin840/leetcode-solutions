/**
 * @param {string} input
 * @return {number}
 */
var lengthLongestPath = function (input) {
  var paths = input.split('\n');
  var lengths = [0];
  var max = 0;
  var level;
  var str;
  var length;

  for (var i = 0; i < paths.length; i++) {
    str = paths[i];
    level = str.lastIndexOf('\t') + 1;
    while (level < lengths.length - 1) {
      lengths.pop();
    }
    length = lengths[lengths.length - 1] + str.length - level + 1;
    lengths.push(length);
    if (str.indexOf('.') >= 0) {
      max = Math.max(length - 1, max);
    }
  }

  return max;
};
