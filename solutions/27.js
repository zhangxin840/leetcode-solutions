/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    var i = 0;
    var j = 0;
    
    while(j < nums.length){
        if(nums[j] === val) {
            j++;
        } else {
            nums[i++] = nums[j++];
        }
    }
    
    return i;
};
