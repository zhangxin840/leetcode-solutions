/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  var p = 1,
    q = 1,
    temp;
  for (var i = 2; i <= n; i++) {
    temp = q;
    q = p + q;
    p = temp;
  }

  return q;
};
