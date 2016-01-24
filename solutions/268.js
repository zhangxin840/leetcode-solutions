/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    var i;
    var numsSum = 0;
    var totalSum = ((0 + (nums.length + 1) - 1) * (nums.length + 1)) / 2;

    for (i = 0; i < nums.length; i++) {
        numsSum += nums[i];
    }

    return totalSum - numsSum;
};
