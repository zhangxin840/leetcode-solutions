/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

var mergeTwoLists = function(l1, l2) {
    var dummyHead = new ListNode();
    var p = dummyHead;
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

    return dummyHead.next;
};


var mergeKLists = function(lists) {
    var begin = 0;
    var end = lists.length - 1;

    while (end > 0) {
        begin = 0;
        while (begin < end) {
            lists[begin] = mergeTwoLists(lists[begin], lists[end]);
            begin++;
            end--;
        }
    }

    return lists[0] || [];
};
