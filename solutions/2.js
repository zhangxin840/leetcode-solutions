/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var p = l1,
        q = l2;
    var dummyHead = new ListNode(0);
    var curr = dummyHead;
    var val = 0;
    var carry = 0;

    while (p || q) {
        val = ((p && p.val || 0) + (q && q.val || 0) + carry);
        curr.next = new ListNode(val % 10);
        curr = curr.next;
        carry = Math.floor(val / 10);
        if (p) p = p.next;
        if (q) q = q.next;
    }

    if (carry) {
        curr.next = new ListNode(carry);
    }

    return dummyHead.next;
};
