/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  var stack = [];
  var matchMap = {
    ')': '(',
    '}': '{',
    ']': '['
  };
  var result = true;

  for (var i = 0; i < s.length; i++) {
    if (!matchMap[s[i]]) {
      stack.push(s[i]);
    } else {
      if (stack.pop() !== matchMap[s[i]]) {
        result = false;
        break;
      }
    }
  }

  if (stack.length > 0) {
    result = false;
  }

  return result;
};
