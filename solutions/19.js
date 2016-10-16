/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  var dummy = new ListNode();
  dummy.next = head;
  var q = dummy;
  var p = dummy;

  while (q && (n-- + 1)) {
    q = q.next;
  }

  while (q) {
    p = p.next;
    q = q.next;
  }
  p.next = p.next.next;

  return dummy.next;
};
