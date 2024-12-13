import { TreeNode } from "../../Shared/TreeNode";
import { diameterOfBinaryTree } from "./diameterOfBinaryTree";

describe("diameterOfBinaryTree", () => {
    test("Example 1: Tree with root [1,2,3,4,5]", () => {
        /*
         *         1
         *        / \
         *       2   3
         *      / \
         *     4   5
         */
        const root = new TreeNode(
            1,
            new TreeNode(2, new TreeNode(4), new TreeNode(5)),
            new TreeNode(3)
        );
        expect(diameterOfBinaryTree(root)).toBe(3);
    });

    test("Example 2: Tree with root [1,2]", () => {
        /*
         *         1
         *        /
         *       2
         */
        const root = new TreeNode(1, new TreeNode(2));
        expect(diameterOfBinaryTree(root)).toBe(1);
    });

    test("Single node tree", () => {
        /*
         *         1
         */
        const root = new TreeNode(1);
        expect(diameterOfBinaryTree(root)).toBe(0);
    });

    test("Empty tree", () => {
        const root = null;
        expect(diameterOfBinaryTree(root)).toBe(0);
    });

    test("Tree with all left children", () => {
        /*
         *         1
         *        /
         *       2
         *      /
         *     3
         */
        const root = new TreeNode(1, new TreeNode(2, new TreeNode(3)));
        expect(diameterOfBinaryTree(root)).toBe(2);
    });

    test("Tree with all right children", () => {
        /*
         *         1
         *          \
         *           2
         *            \
         *             3
         */
        const root = new TreeNode(1, null, new TreeNode(2, null, new TreeNode(3)));
        expect(diameterOfBinaryTree(root)).toBe(2);
    });

    test("Complex tree with multiple paths", () => {
        /*
         *         10
         *        /  \
         *       2    6
         *      / \     \
         *     3   4     8
         */
        const root = new TreeNode(
            10,
            new TreeNode(2, new TreeNode(3), new TreeNode(4)),
            new TreeNode(6, null, new TreeNode(8))
        );
        expect(diameterOfBinaryTree(root)).toBe(4); // Longest path: 3 -> 2 -> 10 -> 6 -> 8
    });

    test("Tree with uneven depth", () => {
        /*
         *         1
         *        / \
         *       2   3
         *      /     \
         *     4       5
         *    /         \
         *   6           7
         *                \
         *                 8
         */
        const root = new TreeNode(
            1,
            new TreeNode(2, new TreeNode(4, new TreeNode(6))),
            new TreeNode(3, null, new TreeNode(5, null, new TreeNode(7, null, new TreeNode(8))))
        );
        expect(diameterOfBinaryTree(root)).toBe(7); // Longest path: 6 -> 4 -> 2 -> 1 -> 3 -> 5 -> 7 -> 8
    });

    test("Complex tree with deep branches and a full middle layer", () => {
        /*
         *            1
         *           / \
         *          2   3
         *         / \
         *        4   5
         *       / \ / \
         *      6  7 8  9
         *     /         \
         *    10          11
         */

        // Return the higher of the two
        //  1. max depth left + max depth right
        //  2. current max left + max depth right
        //  3. current max right = max depth left
        const root = new TreeNode(
            1,
            new TreeNode(
                2,
                new TreeNode(
                    4,
                    new TreeNode(6, new TreeNode(10)),
                    new TreeNode(7)
                ),
                new TreeNode(
                    5,
                    new TreeNode(8),
                    new TreeNode(9, null, new TreeNode(11))
                )
            ),
            new TreeNode(3)
        );
        expect(diameterOfBinaryTree(root)).toBe(6); // Longest path: 10 -> 6 -> 4 -> 2 -> 5 -> 9 -> 11
    });
    
    
    
});
