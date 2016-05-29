/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
    var isFound = false;

    var findSum = function (node, val) {
        if (!node) {
            return;
        }

        if (val + node.val === sum && !node.left && !node.right) {
            isFound = true;
            return;
        }

        findSum(node.left, val + node.val);
        findSum(node.right, val + node.val);
    };

    findSum(root, 0);

    return isFound;
};
