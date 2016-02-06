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
var maxDepth = function(root) {
    var getNodeLevel = function(node, currentLevel) {
        var leftLevel;
        var rightLevel;
        var result;

        if (!node) {
            result = currentLevel - 1;
        } else {
            leftLevel = getNodeLevel(node.left, currentLevel + 1);
            rightLevel = getNodeLevel(node.right, currentLevel + 1);

            result = leftLevel > rightLevel ? leftLevel : rightLevel;
        }

        return result;
    };

    return getNodeLevel(root, 1);
};
