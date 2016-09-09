/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  var currentMax = nums[0];
  var fullMax = nums[0];

  for (var i = 1; i < nums.length; i++) {
    currentMax = Math.max(currentMax + nums[i], nums[i]);
    fullMax = Math.max(currentMax, fullMax);
  }

  return fullMax;
};
