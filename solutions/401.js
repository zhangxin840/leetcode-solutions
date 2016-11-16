/**
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = function (num) {
  var combines = [];
  var bitsLength = 10;

  var getCombine = function (remain, current) {
    if (remain <= 0) {
      while (current.length < bitsLength) current += '0';
      combines.push(current);
      return;
    }
    if (current.length >= bitsLength) {
      return;
    }
    getCombine(remain - 1, current + '1');
    getCombine(remain, current + '0');
  };

  var getNumber = function (binStr) {
    var bitVal = 1;
    var result = 0;
    for (var i = 0; i < binStr.length; i++) {
      if (binStr[binStr.length - 1 - i] === '1') {
        result += bitVal;
      }
      bitVal *= 2;
    }

    return result;
  };
  var hours, minutes;
  var results = [];

  getCombine(num, '');
  combines.sort();
  for (var i = 0; i < combines.length; i++) {
    hours = getNumber(combines[i].slice(0, 4));
    minutes = getNumber(combines[i].slice(4));
    if (hours < 12 && minutes < 60) {
      results.push(hours + '' + ':' + (minutes < 10 ? ('0' + minutes) :
        minutes));
    }
  }

  return results;
};
