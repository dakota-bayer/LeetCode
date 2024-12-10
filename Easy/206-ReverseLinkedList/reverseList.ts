/* 206. Reverse Linked List

Given the head of a singly linked list, reverse the list, and return the reversed list.

Example 1:
    Input: head = [1,2,3,4,5]
    Output: [5,4,3,2,1]

Example 2:
    Input: head = [1,2]
    Output: [2,1]

Example 3:
    Input: head = []
    Output: []

Constraints:
    The number of nodes in the list is the range [0, 5000].
    -5000 <= Node.val <= 5000

Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?

*/

import { ListNode } from "../../Shared/ListNode";

// ITERATIVE SOLUTION
export function reverseList2(head: ListNode | null): ListNode | null {
    let previous = null;

    while (head) {
        let temp = head.next;
        head.next = previous;
        previous = head;
        head = temp;
    }

    return previous;
}

// RECURSIVE SOLUTION
export function reverseList(head: ListNode | null): ListNode | null {
    // [ 1, 2, 3, 4, 5, ]
    const reverse = (head: ListNode | null, previous: ListNode | null = null): ListNode | null => {
        if (!head) {
            return previous;
        }
        const temp = head.next;
        head.next = previous;
        return reverse(temp, head);
    }

    return reverse(head, null);
};