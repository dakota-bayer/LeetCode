import { middleNode } from "./middleNode";
import { ListNode } from "../../Shared/ListNode";

describe("middleNode", () => {
    function createLinkedList(values: number[]): ListNode | null {
        if (values.length === 0) return null;

        const nodes = values.map(val => new ListNode(val));
        for (let i = 0; i < nodes.length - 1; i++) {
            nodes[i].next = nodes[i + 1];
        }
        return nodes[0];
    }

    function getListValues(head: ListNode | null): number[] {
        const values: number[] = [];
        while (head) {
            values.push(head.val);
            head = head.next;
        }
        return values;
    }

    test("returns the middle node for a list with odd length (Example 1)", () => {
        const head = createLinkedList([1, 2, 3, 4, 5]);
        const result = middleNode(head);
        expect(getListValues(result)).toEqual([3, 4, 5]);
    });

    test("returns the second middle node for a list with even length (Example 2)", () => {
        const head = createLinkedList([1, 2, 3, 4, 5, 6]);
        const result = middleNode(head);
        expect(getListValues(result)).toEqual([4, 5, 6]);
    });

    test("returns the only node for a single-node list", () => {
        const head = createLinkedList([1]);
        const result = middleNode(head);
        expect(getListValues(result)).toEqual([1]);
    });

    test("returns the middle node for a two-node list", () => {
        const head = createLinkedList([1, 2]);
        const result = middleNode(head);
        expect(getListValues(result)).toEqual([2]);
    });

    test("returns the middle node for a long list", () => {
        const head = createLinkedList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
        const result = middleNode(head);
        expect(getListValues(result)).toEqual([6, 7, 8, 9, 10, 11]);
    });

    test("returns null for an empty list", () => {
        const head = createLinkedList([]);
        const result = middleNode(head);
        expect(result).toBeNull();
    });
});
