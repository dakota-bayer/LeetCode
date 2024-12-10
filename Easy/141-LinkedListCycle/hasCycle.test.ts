import { hasCycle } from "./hasCycle";
import { ListNode } from "../../Shared/ListNode";

describe("hasCycle", () => {
    function createLinkedListWithCycle(values: number[], pos: number): ListNode | null {
        if (values.length === 0) return null;

        const nodes = values.map(val => new ListNode(val));
        for (let i = 0; i < nodes.length - 1; i++) {
            nodes[i].next = nodes[i + 1];
        }

        if (pos >= 0) {
            nodes[nodes.length - 1].next = nodes[pos];
        }

        return nodes[0];
    }

    test("returns true for a list with a cycle (Example 1)", () => {
        const head = createLinkedListWithCycle([3, 2, 0, -4], 1);
        expect(hasCycle(head)).toBe(true);
    });

    test("returns true for a list with a cycle (Example 2)", () => {
        const head = createLinkedListWithCycle([1, 2], 0);
        expect(hasCycle(head)).toBe(true);
    });

    test("returns false for a list without a cycle (Example 3)", () => {
        const head = createLinkedListWithCycle([1], -1);
        expect(hasCycle(head)).toBe(false);
    });

    test("returns false for an empty list", () => {
        const head = createLinkedListWithCycle([], -1);
        expect(hasCycle(head)).toBe(false);
    });

    test("returns true for a longer list with a cycle", () => {
        const head = createLinkedListWithCycle([1, 2, 3, 4, 5], 2);
        expect(hasCycle(head)).toBe(true);
    });

    test("returns false for a longer list without a cycle", () => {
        const head = createLinkedListWithCycle([1, 2, 3, 4, 5], -1);
        expect(hasCycle(head)).toBe(false);
    });

    test("returns true for a single node with a cycle", () => {
        const node = new ListNode(1);
        node.next = node;
        expect(hasCycle(node)).toBe(true);
    });

    test("returns false for a single node without a cycle", () => {
        const node = new ListNode(1);
        expect(hasCycle(node)).toBe(false);
    });
});
