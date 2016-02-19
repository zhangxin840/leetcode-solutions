/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    var dummyHead = new ListNode(0);
    var p0, p1, p2, p3;

    dummyHead.next = head;
    p0 = dummyHead;
    p1 = head;

    while (p1 && p1.next) {
        p2 = p1.next;
        p3 = p1.next.next;

        p0.next = p2;
        p2.next = p1;
        p1.next = p3;

        p0 = p1;
        p1 = p3;
    }

    return dummyHead.next;
};
