/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  var low = 0;
  var high = nums.length - 1;
  var middle;
  while (low < high) {
    middle = Math.floor((low + high) / 2);
    if (nums[middle] < target) {
      low = middle + 1;
    } else {
      high = middle;
    }
  }

  return nums[low] < target ? low + 1 : low;
};
