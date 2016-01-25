/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    if (nums.length == 0 || nums == null)
        return 0;
    var low = 1,
        high = nums.length - 1,
        mid;
    while (low < high) {
        mid = Math.floor(low + (high - low) / 2);
        var count = 0;
        for (var i = 0; i < nums.length; i++) {
            if (nums[i] <= mid)
                count++;
        }
        if (count > mid)
            high = mid;
        else
            low = mid + 1;
    }
    return low;
};
