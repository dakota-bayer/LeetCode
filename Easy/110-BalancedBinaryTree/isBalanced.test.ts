import { isBalanced } from "./isBalanced";
import { TreeNode, createTreeNode } from "../../Shared/TreeNode";

describe("isBalanced", () => {
    test("Example 1: Tree [3, 9, 20, null, null, 15, 7]", () => {
        /*
                3
               / \
              9   20
                 /  \
                15   7
        */
        const root = createTreeNode(
            3,
            createTreeNode(9),
            createTreeNode(20, createTreeNode(15), createTreeNode(7))
        );
        const result = isBalanced(root);
        expect(result).toBe(true); // Tree is balanced
    });

    test("Example 2: Tree [1, 2, 2, 3, 3, null, null, 4, 4]", () => {
        /*
                    1
                   / \
                  2   2
                 / \
                3   3
               / \
              4   4
        */
        const root = createTreeNode(
            1,
            createTreeNode(
                2,
                createTreeNode(3, createTreeNode(4), createTreeNode(4)),
                createTreeNode(3)
            ),
            createTreeNode(2)
        );
        const result = isBalanced(root);
        expect(result).toBe(false); // Tree is not balanced
    });

    test("Example 3: Empty tree []", () => {
        const root = null; // Empty tree
        const result = isBalanced(root);
        expect(result).toBe(true); // An empty tree is balanced
    });

    test("Edge Case: Single node tree [1]", () => {
        /*
                1
        */
        const root = createTreeNode(1);
        const result = isBalanced(root);
        expect(result).toBe(true); // A single-node tree is balanced
    });

    test("Edge Case: Unbalanced tree with one deep branch", () => {
        /*
                1
               /
              2
             /
            3
           /
          4
        */
        const root = createTreeNode(
            1,
            createTreeNode(
                2,
                createTreeNode(3, createTreeNode(4))
            )
        );
        const result = isBalanced(root);
        expect(result).toBe(false); // Tree is not balanced
    });

    test("Balanced tree with multiple subtrees", () => {
        /*
                 1
               /   \
              2     2
             / \   / \
            3   4 4   3
        */
        const root = createTreeNode(
            1,
            createTreeNode(2, createTreeNode(3), createTreeNode(4)),
            createTreeNode(2, createTreeNode(4), createTreeNode(3))
        );
        const result = isBalanced(root);
        expect(result).toBe(true); // Tree is balanced
    });

    test("Tree with varying subtree depths but balanced", () => {
        /*
                 1
               /   \
              2     2
             /     /
            3     3
        */
        const root = createTreeNode(
            1,
            createTreeNode(2, createTreeNode(3)),
            createTreeNode(2, createTreeNode(3))
        );
        const result = isBalanced(root);
        expect(result).toBe(true); // Tree is balanced
    });
});
