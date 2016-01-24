/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var existHash = {};
    var majority;
    var i;

    for (i = 0; i < nums.length; i++) {
        existHash[nums[i]] = existHash[nums[i]] || 0;
        existHash[nums[i]] = existHash[nums[i]] + 1;
        if (existHash[nums[i]] >= nums.length / 2) {
            majority = nums[i];
            break;
        }
    }

    return majority;
};
