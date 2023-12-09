/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 // Time: O(N), Space: O(1)
 var reverseList = function(head) {
    let current = head;
    let previous = null;
    let nxt = null;

    while (current !== null) {
        nxt = current.next;
        current.next = previous;
        previous = current;
        current = nxt;
    }

    return previous;
};