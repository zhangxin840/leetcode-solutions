/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  var values = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  var i;
  var result = 0;
  var pre;

  // add all
  for (i = 0; i < s.length; i++) {
    // submit if smaller
    if (i >= 1 && values[s[i]] > values[s[i - 1]]) {
      result += values[s[i]] - 2 * values[s[i - 1]];
    } else {
      result += values[s[i]];
    }
  }

  return result;
};
