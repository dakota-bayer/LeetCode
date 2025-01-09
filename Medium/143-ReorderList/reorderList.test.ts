import { reorderList } from './reorderList'; // Replace with the actual module name
import { ListNode, arrayToLinkedList, linkedListToArray } from '../../Shared/ListNode'; // Import the ListNode definition

describe('reorderList', () => {
    test('should reorder a list with an even number of nodes', () => {
        const input = arrayToLinkedList([1, 2, 3, 4]);
        reorderList(input);
        const result = linkedListToArray(input);
        expect(result).toEqual([1, 4, 2, 3]);
    });

    test('should reorder a list with an odd number of nodes', () => {
        const input = arrayToLinkedList([1, 2, 3, 4, 5]);
        reorderList(input);
        const result = linkedListToArray(input);
        expect(result).toEqual([1, 5, 2, 4, 3]);
    });

    test('should handle a single-node list', () => {
        const input = arrayToLinkedList([1]);
        reorderList(input);
        const result = linkedListToArray(input);
        expect(result).toEqual([1]);
    });

    test('should handle a two-node list', () => {
        const input = arrayToLinkedList([1, 2]);
        reorderList(input);
        const result = linkedListToArray(input);
        expect(result).toEqual([1, 2]);
    });

    test('should handle an empty list', () => {
        const input = arrayToLinkedList([]);
        reorderList(input);
        const result = linkedListToArray(input);
        expect(result).toEqual([]);
    });

    test('should handle a longer list', () => {
        const input = arrayToLinkedList([1, 2, 3, 4, 5, 6, 7, 8]);
        reorderList(input);
        const result = linkedListToArray(input);
        expect(result).toEqual([1, 8, 2, 7, 3, 6, 4, 5]);
    });
});
