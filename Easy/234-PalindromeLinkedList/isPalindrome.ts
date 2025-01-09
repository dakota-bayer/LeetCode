/* 234. Palindrome Linked List

Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

Example 1:
    Input: head = [1,2,2,1]
    Output: true

Example 2:
    Input: head = [1,2]
    Output: false

Constraints:
    The number of nodes in the list is in the range [1, 105].
    0 <= Node.val <= 9

Follow up: Could you do it in O(n) time and O(1) space?

*/

import { ListNode } from "../../Shared/ListNode";

export function isPalindrome(head: ListNode | null): boolean {
    let slow = head;
    let fast = head;
    const stack: number[] = [];

    if (!head || !head.next) {
        return true;
    }

    while (fast && fast.next) {
        stack.push(slow!.val);
        slow = slow!.next;
        fast = fast.next.next;
    }

    // If the list has an odd number of elements, skip the middle element
    if (fast) {
        slow = slow!.next;
    }

    while (slow) {
        if (slow.val !== stack.pop()) {
            return false;
        }
        slow = slow.next;
    }

    return true;
};

/*
import { arrayToLinkedList } from "../../Shared/ListNode";
const list = arrayToLinkedList([1, 2, 3, 2, 1]);
isPalindrome(list);
*/