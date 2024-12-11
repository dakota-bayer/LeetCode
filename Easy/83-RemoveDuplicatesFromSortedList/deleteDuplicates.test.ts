import { deleteDuplicates } from "./deleteDuplicates";
import { ListNode, createLinkedList, linkedListToArray } from "../../Shared/ListNode";

describe("deleteDuplicates", () => {
    test("removes duplicates from a small list", () => {
        const head = createLinkedList([1, 1, 2]);
        const result = deleteDuplicates(head);
        expect(linkedListToArray(result)).toEqual([1, 2]);
    });

    test("removes duplicates from a larger list", () => {
        const head = createLinkedList([1, 1, 2, 3, 3]);
        const result = deleteDuplicates(head);
        expect(linkedListToArray(result)).toEqual([1, 2, 3]);
    });

    test("handles a list with no duplicates", () => {
        const head = createLinkedList([1, 2, 3]);
        const result = deleteDuplicates(head);
        expect(linkedListToArray(result)).toEqual([1, 2, 3]);
    });

    test("handles an empty list", () => {
        const head = createLinkedList([]);
        const result = deleteDuplicates(head);
        expect(linkedListToArray(result)).toEqual([]);
    });

    test("handles a list with all duplicate elements", () => {
        const head = createLinkedList([1, 1, 1, 1]);
        const result = deleteDuplicates(head);
        expect(linkedListToArray(result)).toEqual([1]);
    });

    test("handles a single-element list", () => {
        const head = createLinkedList([1]);
        const result = deleteDuplicates(head);
        expect(linkedListToArray(result)).toEqual([1]);
    });
});