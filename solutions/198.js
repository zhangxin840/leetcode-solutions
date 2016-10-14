/**
 * @param {number[]} nums
 * @return {number}
 */
// var rob = function(nums) {
//     var cache = [];
//     var getMoney = function (nums) {
//         var money1 = 0, money2 = 0;
//         var result;

//         if (nums.length === 1) {
//             return nums[0];
//         }

//         if (nums.length === 0) {
//             return 0;
//         }

//         if (cache[nums.length]) {
//             return cache[nums.length];
//         }

//         money1 = nums[0] + getMoney(nums.slice(2));
//         money2 = nums[1] + getMoney(nums.slice(3));

//         result = Math.max(money1, money2);
//         cache[nums.length] = result;

//         return result;
//     };

//     return getMoney(nums);
// };

var rob = function(nums) {
    var prevMax = 0;
    var currentMax = 0;
    var temp = 0;

    for (var i = 0; i < nums.length; i++) {
        temp = currentMax;
        currentMax = Math.max(prevMax + nums[i], currentMax);
        prevMax = temp;
    }

    return currentMax;
};
