/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  var result = '';
  var values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var symbols = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V',
    'IV', 'I'
  ];
  var times = 0;
  var i = 0,
    j = 0;

  while (num) {
    times = Math.floor(num / values[i]);
    for (j = 0; j < times; j++) {
      result += symbols[i];
      num -= values[i]
    }
    i++;
  }

  return result;
};
