/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var existHash = {};
    var i;
    var theNumber;
    var result = [];

    for (i = 0; i < nums.length; i++) {
        existHash[nums[i]] = i + 1;
    }

    for (i = 0; i < nums.length; i++) {
        theNumber = nums[i];
        if (existHash[target - theNumber] && (existHash[target - theNumber] !== i + 1)) {
            result.push(i + 1);
            result.push(existHash[target - theNumber]);
            break;
        }
    }

    return result;
};
