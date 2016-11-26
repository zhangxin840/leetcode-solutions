/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  var getPath = function (root, node, path) {
    var leftPath, rightPath;

    if (!root) {
      return null;
    }

    if (root === node) {
      return path;
    }

    path.push(root.left);
    leftPath = getPath(root.left, node, path);
    if (!leftPath) path.pop();

    path.push(root.right);
    rightPath = getPath(root.right, node, path);
    if (!rightPath) path.pop();

    return leftPath || rightPath;
  };

  var pathP = getPath(root, p, [root]);
  var pathQ = getPath(root, q, [root]);
  var ancestor;

  while (pathP && pathQ && (pathP.length > 0) && (pathQ.length > 0) && pathP[
      0] === pathQ[0]) {
    ancestor = pathP[0];
    pathP.shift();
    pathQ.shift();
  }

  return ancestor;
};
