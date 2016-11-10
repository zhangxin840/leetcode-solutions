/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  var set = {
    'a': 1,
    'e': 1,
    'i': 1,
    'o': 1,
    'u': 1,
    'A': 1,
    'E': 1,
    'I': 1,
    'O': 1,
    'U': 1
  };

  var strArray = s.split('');
  var i = 0;
  var j = strArray.length - 1;
  var temp;

  while (i < j) {
    if (!set[strArray[i]]) {
      i++;
      continue;
    }

    if (!set[strArray[j]]) {
      j--;
      continue;
    }

    temp = strArray[i];
    strArray[i] = strArray[j];
    strArray[j] = temp;

    i++;
    j--;
  }

  return strArray.join('');
};
