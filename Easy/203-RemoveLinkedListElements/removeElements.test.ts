import { removeElements } from "./removeElements";
import { ListNode, createLinkedList, linkedListToArray } from "../../Shared/ListNode";

describe("removeElements", () => {
    test("removes nodes with the specified value", () => {
        const head = createLinkedList([1, 2, 6, 3, 4, 5, 6]);
        const result = removeElements(head, 6);
        expect(linkedListToArray(result)).toEqual([1, 2, 3, 4, 5]);
    });

    test("returns an empty list when all elements are removed", () => {
        const head = createLinkedList([7, 7, 7, 7]);
        const result = removeElements(head, 7);
        expect(linkedListToArray(result)).toEqual([]);
    });

    test("returns the same list when no elements match the value", () => {
        const head = createLinkedList([1, 2, 3, 4, 5]);
        const result = removeElements(head, 6);
        expect(linkedListToArray(result)).toEqual([1, 2, 3, 4, 5]);
    });

    test("handles an empty list", () => {
        const head = createLinkedList([]);
        const result = removeElements(head, 1);
        expect(linkedListToArray(result)).toEqual([]);
    });

    test("removes multiple consecutive nodes", () => {
        const head = createLinkedList([1, 2, 2, 3, 4, 5]);
        const result = removeElements(head, 2);
        expect(linkedListToArray(result)).toEqual([1, 3, 4, 5]);
    });

    test("removes the first node when it matches the value", () => {
        const head = createLinkedList([6, 1, 2, 3, 4, 5]);
        const result = removeElements(head, 6);
        expect(linkedListToArray(result)).toEqual([1, 2, 3, 4, 5]);
    });

    test("removes the last node when it matches the value", () => {
        const head = createLinkedList([1, 2, 3, 4, 5, 6]);
        const result = removeElements(head, 6);
        expect(linkedListToArray(result)).toEqual([1, 2, 3, 4, 5]);
    });
});
