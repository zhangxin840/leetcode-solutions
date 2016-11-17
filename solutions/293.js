/**
 * @param {string} s
 * @return {string[]}
 */
var generatePossibleNextMoves = function (s) {
  var results = [];
  var temp;
  for (var i = 0; i < s.length - 1; i++) {
    temp = s.split('');
    if (temp[i] === '+' && temp[i + 1] === '+') {
      temp[i] = '-';
      temp[i + 1] = '-';
      results.push(temp.join(''));
    }
  }
  return results;
};
