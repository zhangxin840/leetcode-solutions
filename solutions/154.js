/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  var low = 0;
  var high = nums.length - 1;
  var middle;
  while (low < high && nums[low] >= nums[high]) {
    middle = Math.floor((low + high) / 2);
    if (nums[middle] > nums[high]) {
      low = middle + 1;
    } else if (nums[middle] < nums[low]) {
      high = middle;
    } else {
      low = low + 1;
    }
  }

  return nums[low];
};
