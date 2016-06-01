/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  var BITS = 32;
  var bitResult = 0;
  var result = 0;

  for (var i = 0; i < BITS; i++) {
    bitResult = 0;
    for (var j = 0; j < nums.length; j++) {
      bitResult += ((nums[j] >> i) & 1);
    }
    bitResult = bitResult % 3;
    result += (bitResult << i);
  }

  return result;
};
