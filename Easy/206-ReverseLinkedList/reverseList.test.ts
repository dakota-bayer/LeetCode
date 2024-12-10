import { reverseList } from "./reverseList";
import { ListNode } from "../../Shared/ListNode";

describe("reverseList", () => {
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

    test("reverses a list with multiple nodes (Example 1)", () => {
        const head = createLinkedList([1, 2, 3, 4, 5]);
        const result = reverseList(head);
        expect(getListValues(result)).toEqual([5, 4, 3, 2, 1]);
    });

    test("reverses a list with two nodes (Example 2)", () => {
        const head = createLinkedList([1, 2]);
        const result = reverseList(head);
        expect(getListValues(result)).toEqual([2, 1]);
    });

    test("handles an empty list (Example 3)", () => {
        const head = createLinkedList([]);
        const result = reverseList(head);
        expect(result).toBeNull();
    });

    test("reverses a single-node list", () => {
        const head = createLinkedList([1]);
        const result = reverseList(head);
        expect(getListValues(result)).toEqual([1]);
    });

    test("reverses a longer list", () => {
        const head = createLinkedList([10, 20, 30, 40, 50, 60, 70]);
        const result = reverseList(head);
        expect(getListValues(result)).toEqual([70, 60, 50, 40, 30, 20, 10]);
    });
});
