/**
 * Definition for singly-linked list with a random pointer.
 * function RandomListNode(label) {
 *     this.label = label;
 *     this.next = this.random = null;
 * }
 */

/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 */
var copyRandomList = function(head) {
    var p = head;
    var headCopy;
    var next, copy;

    while (p) {
        next = p.next;
        copy = new RandomListNode(p.label);
        p.next = copy;
        copy.next = next;
        p = next;
    }

    p = head;
    while (p) {
        p.next.random = p.random && p.random.next;
        p = p.next.next;
    }

    p = head;
    headCopy = p && p.next;
    while (p) {
        copy = p.next;
        p.next = copy.next;
        p = p.next;
        copy.next = p && p.next;
    }

    return headCopy;
};
