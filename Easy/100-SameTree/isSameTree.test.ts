import { isSameTree } from "./isSameTree";
import { TreeNode } from "../../Shared/TreeNode";

describe("isSameTree", () => {
    test("Example 1: Trees are [1,2,3] and [1,2,3] (true)", () => {
        /* Tree p:
         *        1
         *      /   \
         *     2     3
         *
         * Tree q:
         *        1
         *      /   \
         *     2     3
         */
        const p = new TreeNode(1, new TreeNode(2), new TreeNode(3));
        const q = new TreeNode(1, new TreeNode(2), new TreeNode(3));
        expect(isSameTree(p, q)).toBe(true);
    });

    test("Example 2: Trees are [1,2] and [1,null,2] (false)", () => {
        /* Tree p:
         *        1
         *      /
         *     2
         *
         * Tree q:
         *        1
         *         \
         *          2
         */
        const p = new TreeNode(1, new TreeNode(2));
        const q = new TreeNode(1, null, new TreeNode(2));
        expect(isSameTree(p, q)).toBe(false);
    });

    test("Example 3: Trees are [1,2,1] and [1,1,2] (false)", () => {
        /* Tree p:
         *        1
         *      /   \
         *     2     1
         *
         * Tree q:
         *        1
         *      /   \
         *     1     2
         */
        const p = new TreeNode(1, new TreeNode(2), new TreeNode(1));
        const q = new TreeNode(1, new TreeNode(1), new TreeNode(2));
        expect(isSameTree(p, q)).toBe(false);
    });

    test("Both trees are null (true)", () => {
        /* Tree p:
         *        (null)
         *
         * Tree q:
         *        (null)
         */
        const p = null;
        const q = null;
        expect(isSameTree(p, q)).toBe(true);
    });

    test("One tree is null and the other is not (false)", () => {
        /* Tree p:
         *        (null)
         *
         * Tree q:
         *        1
         */
        const p = null;
        const q = new TreeNode(1);
        expect(isSameTree(p, q)).toBe(false);
    });

    test("Trees with different structures (false)", () => {
        /* Tree p:
         *        1
         *      /
         *     2
         *
         * Tree q:
         *        1
         *      /   \
         *     2     3
         */
        const p = new TreeNode(1, new TreeNode(2));
        const q = new TreeNode(1, new TreeNode(2), new TreeNode(3));
        expect(isSameTree(p, q)).toBe(false);
    });

    test("Trees with negative values (true)", () => {
        /* Tree p:
         *        -1
         *      /    \
         *    -2      -3
         *
         * Tree q:
         *        -1
         *      /    \
         *    -2      -3
         */
        const p = new TreeNode(-1, new TreeNode(-2), new TreeNode(-3));
        const q = new TreeNode(-1, new TreeNode(-2), new TreeNode(-3));
        expect(isSameTree(p, q)).toBe(true);
    });

    test("Trees with mixed values (false)", () => {
        /* Tree p:
         *        1
         *      /   \
         *     2     3
         *
         * Tree q:
         *        1
         *      /
         *     2
         */
        const p = new TreeNode(1, new TreeNode(2), new TreeNode(3));
        const q = new TreeNode(1, new TreeNode(2));
        expect(isSameTree(p, q)).toBe(false);
    });
});
