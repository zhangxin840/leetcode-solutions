// https://www.interviewbit.com/problems/reverse-linked-list/
// Definition for singly-linked list.
//			function Node(data){
//				this.data = data
//				this.next = null
//			}

module.exports = {
  //param A : head node of linked list
  //return the head node in the linked list
  reverseList: function (A) {
    var pre = null;
    var cur = A;
    var next;

    if (!A) return A;

    while (cur) {
      next = cur.next;
      cur.next = pre;
      pre = cur;
      cur = next;
    }

    return pre;
  }
};
