/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
    var nums = [];

    while (head) {
        nums.push(head.val);
        head = head.next;
    }

    var createNodes = function (nums, start, end) {
        if (start > end) return null;

        var mid = Math.round((start + end) / 2);
        var node = new ListNode(nums[mid]);
        node.left = createNodes(nums, start, mid - 1);
        node.right = createNodes(nums, mid + 1, end);

        return node;
    };

    return createNodes(nums, 0, nums.length - 1);
};
