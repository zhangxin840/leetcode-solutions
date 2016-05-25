/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
    var createNodes = function (nums, start, end) {
        if (start > end) {
            return null;
        }

        var mid = Math.round((end + start) / 2);
        var node = new TreeNode(nums[mid]);

        node.left = createNodes(nums, start, mid - 1);
        node.right = createNodes(nums, mid + 1, end);

        return node;
    }

    return createNodes(nums, 0, nums.length - 1);
};
