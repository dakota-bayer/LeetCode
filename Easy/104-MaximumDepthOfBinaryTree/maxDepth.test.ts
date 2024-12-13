import { TreeNode } from "../../Shared/TreeNode";
import { maxDepth } from "./maxDepth";

describe("maxDepth", () => {
    test("Example 1: Tree with root [3,9,20,null,null,15,7]", () => {
        /*
         *         3
         *        / \
         *       9   20
         *           /  \
         *          15   7
         */
        const root = new TreeNode(
            3,
            new TreeNode(9),
            new TreeNode(20, new TreeNode(15), new TreeNode(7))
        );
        expect(maxDepth(root)).toBe(3);
    });

    test("Example 2: Tree with root [1,null,2]", () => {
        /*
         *         1
         *          \
         *           2
         */
        const root = new TreeNode(1, null, new TreeNode(2));
        expect(maxDepth(root)).toBe(2);
    });

    test("Single node tree", () => {
        /*
         *         5
         */
        const root = new TreeNode(5);
        expect(maxDepth(root)).toBe(1);
    });

    test("Empty tree", () => {
        const root = null;
        expect(maxDepth(root)).toBe(0);
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
        expect(maxDepth(root)).toBe(3);
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
        expect(maxDepth(root)).toBe(3);
    });

    test("Complex tree", () => {
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
        expect(maxDepth(root)).toBe(3);
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
        expect(maxDepth(root)).toBe(5);
    });
});
