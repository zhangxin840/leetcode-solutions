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
var mergeTwoLists = function(l1, l2) {
    var l3 = new ListNode();
    var p = l3;
    var temp;

    while (l1 && l2) {
        if (l1.val <= l2.val) {
            p.next = l1;
            l1 = l1.next;
        } else {
            p.next = l2;
            l2 = l2.next;
        }

        p = p.next;
    }

    if (l1) {
        p.next = l1;
    }

    if (l2) {
        p.next = l2;
    }

    return l3.next;
};
