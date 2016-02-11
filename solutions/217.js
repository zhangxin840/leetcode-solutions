/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var hash = {};
    var i;
    var result = false;

    for (i = 0; i < nums.length; i++) {
        if (hash['' + nums[i]]) {
            result = true;
            break;
        } else {
            hash['' + nums[i]] = 1;
        }
    }

    return result;
};
