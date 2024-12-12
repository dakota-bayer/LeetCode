import { mergeTwoLists } from './mergeTwoLists';
import { ListNode, createLinkedList, linkedListToArray } from '../../Shared/ListNode';

describe("mergeTwoLists", () => {
    test("merges two empty lists", () => {
        const list1 = createLinkedList([]);
        const list2 = createLinkedList([]);
        const result = mergeTwoLists(list1, list2);
        expect(linkedListToArray(result)).toEqual([]);
    });

    test("merges one empty, one full list", () => {
        const list1 = createLinkedList([]);
        const list2 = createLinkedList([1, 2, 3, 4, 5]);
        const result = mergeTwoLists(list1, list2);
        expect(linkedListToArray(result)).toEqual([1, 2, 3, 4, 5]);
    });

    test("merges two full lists of the same length", () => {
        const list1 = createLinkedList([1, 2, 3, 4]);
        const list2 = createLinkedList([1, 2, 3, 4]);
        const result = mergeTwoLists(list1, list2);
        expect(linkedListToArray(result)).toEqual([1, 1, 2, 2, 3, 3, 4, 4]);
    });

    test("merges two full lists of different lengths", () => {
        const list1 = createLinkedList([1, 3, 5, 6, 7]);
        const list2 = createLinkedList([1, 2, 4]);
        const result = mergeTwoLists(list1, list2);
        expect(linkedListToArray(result)).toEqual([1, 1, 2, 3, 4, 5, 6, 7]);
    });

    test("merges two single element lists with the same value", () => {
        const list1 = createLinkedList([1]);
        const list2 = createLinkedList([1]);
        const result = mergeTwoLists(list1, list2);
        expect(linkedListToArray(result)).toEqual([1, 1]);
    });

    test("merges two single element lists with different values", () => {
        const list1 = createLinkedList([1]);
        const list2 = createLinkedList([2]);
        const result = mergeTwoLists(list1, list2);
        expect(linkedListToArray(result)).toEqual([1, 2]);
    });
});