/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  var getCommon = function (strs, l, r) {
    if (l >= r) {
      return strs[l];
    }

    var m = Math.floor((l + r) / 2);
    var lCommon = getCommon(strs, l, m);
    var rCommon = getCommon(strs, m + 1, r);

    return mergeCommon(lCommon, rCommon);
  };

  var mergeCommon = function (a, b) {
    var common = ''
    var i = 0;

    while (a[i] && b[i] && a[i] === b[i]) {
      common += a[i];
      i++;
    }

    return common;
  };

  if (strs == null || strs.length == 0) return "";
  return getCommon(strs, 0, strs.length - 1);
};
