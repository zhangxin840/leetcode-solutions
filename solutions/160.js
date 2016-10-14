/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  var getLength = function (head) {
    var result = 0;
    var p = head;
    while (p) {
      result++;
      p = p.next;
    }
    return result;
  };

  var lengthA = getLength(headA);
  var lengthB = getLength(headB);
  var i;
  var result = null;

  if (lengthA >= lengthB) {
    for (i = 0; i < lengthA - lengthB; i++) {
      headA = headA.next;
    }
  } else {
    for (i = 0; i < lengthB - lengthA; i++) {
      headB = headB.next;
    }
  }

  while (headA && headB) {
    if (headA === headB) {
      result = headA;
      break;
    }

    headA = headA.next;
    headB = headB.next;
  }

  return result;
};
