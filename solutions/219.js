/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  var map = {};
  var result = false;

  for (var i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      if (i - (map[nums[i]] - 1) <= k) {
        result = true;
        break;
      } else {
        map[nums[i]] = 0;
      }
    }
    map[nums[i]] = i + 1;
  }

  return result;
};
