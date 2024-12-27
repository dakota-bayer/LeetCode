import { lowestCommonAncestor } from "./lowestCommonAncestor";
import { TreeNode } from "../../Shared/TreeNode";

describe("lowestCommonAncestor", () => {
    const buildTree = (values: (number | null)[]): TreeNode | null => {
        if (!values.length || values[0] === null) return null;

        const root = new TreeNode(values[0]!);
        const queue: TreeNode[] = [root];
        let i = 1;

        while (queue.length && i < values.length) {
            const node = queue.shift()!;

            if (values[i] !== null) {
                node.left = new TreeNode(values[i]!);
                queue.push(node.left);
            }
            i++;

            if (i < values.length && values[i] !== null) {
                node.right = new TreeNode(values[i]!);
                queue.push(node.right);
            }
            i++;
        }

        return root;
    };

    test("Example 1: LCA of nodes 2 and 8 is 6", () => {
        const root = buildTree([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]);
        const p = new TreeNode(2);
        const q = new TreeNode(8);

        const result = lowestCommonAncestor(root, p, q);
        expect(result?.val).toBe(6);
    });

    test("Example 2: LCA of nodes 2 and 4 is 2", () => {
        const root = buildTree([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]);
        const p = new TreeNode(2);
        const q = new TreeNode(4);

        const result = lowestCommonAncestor(root, p, q);
        expect(result?.val).toBe(2);
    });

    test("Example 3: LCA of nodes 2 and 1 is 2", () => {
        const root = buildTree([2, 1]);
        const p = new TreeNode(2);
        const q = new TreeNode(1);

        const result = lowestCommonAncestor(root, p, q);
        expect(result?.val).toBe(2);
    });

    test("LCA of nodes 7 and 9 is 8", () => {
        const root = buildTree([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]);
        const p = new TreeNode(7);
        const q = new TreeNode(9);

        const result = lowestCommonAncestor(root, p, q);
        expect(result?.val).toBe(8);
    });

    test("LCA of nodes 3 and 5 is 4", () => {
        const root = buildTree([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]);
        const p = new TreeNode(3);
        const q = new TreeNode(5);

        const result = lowestCommonAncestor(root, p, q);
        expect(result?.val).toBe(4);
    });
});
