/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function (s) {
  var map = {};
  var haveOdd = false;
  var result = true;
  for (var i = 0; i < s.length; i++) {
    map[s[i]] = map[s[i]] || 0;
    map[s[i]]++;
  }

  for (var key in map) {
    if (map[key] % 2 !== 0) {
      if (!haveOdd) haveOdd = true;
      else {
        result = false;
        break;
      }
    }
  }

  return result;
};
