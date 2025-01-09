import { isPalindrome } from "./isPalindrome";
import { ListNode } from "../../Shared/ListNode";

describe("isPalindrome", () => {
    // Helper function to create a linked list from an array
    function arrayToLinkedList(values: number[]): ListNode | null {
        if (values.length === 0) return null;
        const head = new ListNode(values[0]);
        let current = head;
        for (let i = 1; i < values.length; i++) {
            current.next = new ListNode(values[i]);
            current = current.next;
        }
        return head;
    }

    test("returns true for a palindrome linked list", () => {
        const head = arrayToLinkedList([1, 2, 2, 1]);
        expect(isPalindrome(head)).toBe(true);
    });

    test("returns false for a non-palindrome linked list", () => {
        const head = arrayToLinkedList([1, 2]);
        expect(isPalindrome(head)).toBe(false);
    });

    test("returns true for a single-node linked list", () => {
        const head = arrayToLinkedList([1]);
        expect(isPalindrome(head)).toBe(true);
    });

    test("returns true for an empty linked list", () => {
        const head = arrayToLinkedList([]);
        expect(isPalindrome(head)).toBe(true);
    });

    test("returns true for a long palindrome linked list", () => {
        const head = arrayToLinkedList([1, 2, 3, 2, 1]);
        expect(isPalindrome(head)).toBe(true);
    });

    test("returns false for a long non-palindrome linked list", () => {
        const head = arrayToLinkedList([1, 2, 3, 4, 5]);
        expect(isPalindrome(head)).toBe(false);
    });

    test("handles a linked list with repeated elements", () => {
        const head = arrayToLinkedList([2, 2, 2, 2]);
        expect(isPalindrome(head)).toBe(true);
    });
});
