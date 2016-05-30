/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function (root) {
    var maxSum = root.val;

    var findMax = function (node) {
        if (!node) return 0;

        var leftMax = findMax(node.left);
        var rightMax = findMax(node.right);
        var childMax = Math.max(leftMax, rightMax);

        var nodeMax = (childMax > 0 ? childMax : 0) + node.val;
        var pathMax = (leftMax > 0 ? leftMax : 0) + (rightMax > 0 ?
            rightMax : 0) + node.val;

        if (pathMax > maxSum) {
            maxSum = pathMax;
        }

        return nodeMax;
    };

    findMax(root);

    return maxSum;
};
