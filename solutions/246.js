/**
 * @param {string} num
 * @return {boolean}
 */
var isStrobogrammatic = function (num) {
  var set = {
    '0': '0',
    '1': '1',
    '6': '9',
    '8': '8',
    '9': '6'
  };

  var result = false;

  for (var i = 0; i < num.length; i++) {
    if (num[i] === set[num[num.length - 1 - i]]) {
      result = true;
    } else {
      result = false;
      break;
    }
  }

  return result;
};
