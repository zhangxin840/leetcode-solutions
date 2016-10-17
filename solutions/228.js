/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  var i = 0,
    j = 0;
  var result = [];

  while (i < nums.length) {
    while ((j + 1 < nums.length) && (nums[j + 1] - nums[i] === j + 1 - i)) {
      j++;
    }

    if (i !== j) {
      result.push(nums[i] + '->' + nums[j]);
    } else {
      result.push(nums[i] + '');
    }

    j++;
    i = j;
  }

  return result;
};
