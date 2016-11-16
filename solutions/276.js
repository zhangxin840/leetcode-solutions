/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var numWays = function (n, k) {
  if (n === 0 || k === 0) return 0;
  if (n === 1) return k;
  var same = [];
  var diff = [];
  same[0] = same[1] = k;
  diff[0] = k;
  diff[1] = k * (k - 1);
  for (var i = 2; i < n; i++) {
    same[i] = diff[i - 1];
    diff[i] = (k - 1) * same[i - 1] + (k - 1) * diff[i - 1];
  }
  return same[n - 1] + diff[n - 1];
};
