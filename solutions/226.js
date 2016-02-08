/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    var invertNode = function(node) {
        var temp;

        if (!node) {
            return;
        } else {
            temp = node.left;
            node.left = node.right;
            node.right = temp;

            invertNode(node.left);
            invertNode(node.right);
        }
    };

    invertNode(root);
    return root;
};
