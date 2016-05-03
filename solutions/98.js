/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
    var checkNode = function (node, low, high) {
        if (!node) {
            return true;
        }

        return (((low === null) || node.val > low) && ((high === null) ||
                node.val < high)) &&
            (checkNode(node.left, low, node.val)) &&
            (checkNode(node.right, node.val, high));
    };

    return checkNode(root, null, null);
};
