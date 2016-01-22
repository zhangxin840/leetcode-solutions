/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var i = 0;
    var j = 1;

    while(j < nums.length) {
        if(nums[i] === nums[j]) {
            j++;
        } else {
            nums[++i] = nums[j++];
        }
    }

    return i + 1;
};
