/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var i;
    var j;
    var k = nums.length;

    for (i = 0; i < k; i++) {
        if (nums[i] === 0) {
            for (j = i + 1; j < nums.length; j++) {
                if (nums[j]) {
                    nums[i] = nums[j];
                    nums[j] = 0;
                    k++;
                    break;
                }
            }
        }
    }
};
