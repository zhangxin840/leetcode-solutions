/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  var queue = [];
  var result = [];
  var node;

  if (root) {
    result.push(root.val);
    queue.push(root);
  }

  while (queue.length > 0) {
    node = queue.shift();

    if (node.left !== null) {
      result.push(node.left.val);
    } else {
      result.push('null');
    }

    if (node.right !== null) {
      result.push(node.right.val);
    } else {
      result.push('null');
    }

    if (node.left !== null) queue.push(node.left);
    if (node.right !== null) queue.push(node.right);
  }

  return result.join(',');
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  var values = data.length > 0 ? data.split(',') : [];
  var root = null;
  var rootValue = values.shift();
  var queue = [];
  var flag = false;
  var value;
  var parent = null;
  var newNode = null;

  if (values.length <= 0 || rootValue === 'null') {
    return null;
  }

  root = new TreeNode(+(rootValue));
  queue.push(root);

  while (values.length > 0) {
    value = values.shift();

    if (!flag) {
      parent = queue.shift();
    }

    if (!parent) break;

    if (value === 'null') {
      newNode = null;
    } else {
      newNode = new TreeNode(+(value));
      queue.push(newNode);
    }

    if (!flag) {
      parent.left = newNode;
      flag = true;
    } else {
      parent.right = newNode;
      flag = false;
    }
  }

  return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
