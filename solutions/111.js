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
var minDepth = function (root) {
    if (!root) return 0;
    var queue = [];
    var right = root;
    var depth = 1;
    var node;

    queue.push(root);
    while (queue.length > 0) {
        node = queue.shift();

        if (!node.left && !node.right) break;

        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);

        if (node === right) {
            depth++;
            right = (node.right !== null) ? node.right : node.left;
        }
    }

    return depth;
};
