/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  var theNumber = 0;

  for (var i = 0; i < nums.length; i++) {
    theNumber ^= nums[i];
  }

  return theNumber;
};
