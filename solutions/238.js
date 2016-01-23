/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    var total;
    var result;
    var firstZeroPosition = 0; // 1 based

    total = nums.reduce(function(lastValue, item, index) {
        if (item === 0 && firstZeroPosition === 0) {
            firstZeroPosition = index + 1;
            return lastValue;
        }

        return lastValue * item;
    });

    result = nums.map(function(item, index) {
        if (firstZeroPosition) {
            if (index === firstZeroPosition - 1) {
                return total
            } else {
                return 0;
            }
        } else {
            return total / item;
        }

    });

    return result;
};
