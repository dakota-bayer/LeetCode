/* 143. Reorder List

You are given the head of a singly linked-list. The list can be represented as:

L0 → L1 → … → Ln - 1 → Ln

Reorder the list to be on the following form:

L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …

You may not modify the values in the list's nodes. Only nodes themselves may be changed. 

Example 1:
    Input: head = [1,2,3,4]
    Output: [1,4,2,3]

Example 2:
    Input: head = [1,2,3,4,5]
    Output: [1,5,2,4,3]

Constraints:
    The number of nodes in the list is in the range [1, 5 * 10^4].
    1 <= Node.val <= 1000

*/

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

/**
 Do not return anything, modify head in-place instead.
 */

import { ListNode, arrayToLinkedList } from "../../Shared/ListNode";

export function reorderList(head: ListNode | null): void {
    if (!head) return;

    let slow = head;
    let fast = head;

    // get to middle of list
    while (fast && fast.next) {
        slow = slow.next!;
        fast = fast.next.next!;
    }

    // reverse second half of list
    let second = slow.next;
    slow.next = null;
    let prev: ListNode | null = null;

    while(second) {
        const next = second.next;
        second.next = prev;
        prev = second;
        second = next;
    }

    // merge the two halves
    let first = head;
    let reversedSecond = prev;
    while(reversedSecond) {
        const tmp1 = first.next;
        const tmp2 = reversedSecond.next;

        first.next = reversedSecond;
        reversedSecond.next = tmp1;
        
        first = tmp1!;
        reversedSecond = tmp2;
    }
};

const input = arrayToLinkedList([1, 2, 3, 4, 5]);
reorderList(input);