/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  var currentMax = nums[0];
  var currentMin = nums[0];
  var cx, cn;
  var fullMax = nums[0];

  for (var i = 1; i < nums.length; i++) {
    cx = currentMax;
    cn = currentMin;
    currentMax = Math.max(Math.max(cx * nums[i], nums[i]), cn * nums[i]);
    currentMin = Math.min(Math.min(cx * nums[i], nums[i]), cn * nums[i]);
    fullMax = Math.max(currentMax, fullMax);
  }

  return fullMax;
};
