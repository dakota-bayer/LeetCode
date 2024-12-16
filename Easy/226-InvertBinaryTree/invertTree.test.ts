import { TreeNode } from "../../Shared/TreeNode";
import { invertTree } from "./invertTree";

describe("invertTree", () => {
    test("Example 1: Tree with root [4,2,7,1,3,6,9]", () => {
        /*
         * Input Tree:
         *         4
         *       /   \
         *      2     7
         *     / \   / \
         *    1   3 6   9
         *
         * Output Tree:
         *         4
         *       /   \
         *      7     2
         *     / \   / \
         *    9   6 3   1
         */
        const root = new TreeNode(
            4,
            new TreeNode(2, new TreeNode(1), new TreeNode(3)),
            new TreeNode(7, new TreeNode(6), new TreeNode(9))
        );
        const expected = new TreeNode(
            4,
            new TreeNode(7, new TreeNode(9), new TreeNode(6)),
            new TreeNode(2, new TreeNode(3), new TreeNode(1))
        );
        expect(invertTree(root)).toEqual(expected);
    });

    test("Example 2: Tree with root [2,1,3]", () => {
        /*
         * Input Tree:
         *       2
         *      / \
         *     1   3
         *
         * Output Tree:
         *       2
         *      / \
         *     3   1
         */
        const root = new TreeNode(2, new TreeNode(1), new TreeNode(3));
        const expected = new TreeNode(2, new TreeNode(3), new TreeNode(1));
        expect(invertTree(root)).toEqual(expected);
    });

    test("Example 3: Empty Tree", () => {
        /*
         * Input Tree: []
         * Output Tree: []
         */
        const root = null;
        const expected = null;
        expect(invertTree(root)).toBe(expected);
    });

    test("Single Node Tree", () => {
        /*
         * Input Tree:
         *       1
         *
         * Output Tree:
         *       1
         */
        const root = new TreeNode(1);
        const expected = new TreeNode(1);
        expect(invertTree(root)).toEqual(expected);
    });

    test("Tree with Left-Only Nodes", () => {
        /*
         * Input Tree:
         *       4
         *      /
         *     3
         *    /
         *   2
         *
         * Output Tree:
         *       4
         *        \
         *         3
         *          \
         *           2
         */
        const root = new TreeNode(4, new TreeNode(3, new TreeNode(2)));
        const expected = new TreeNode(4, null, new TreeNode(3, null, new TreeNode(2)));
        expect(invertTree(root)).toEqual(expected);
    });

    test("Tree with Right-Only Nodes", () => {
        /*
         * Input Tree:
         *       1
         *        \
         *         2
         *          \
         *           3
         *
         * Output Tree:
         *       1
         *      /
         *     2
         *    /
         *   3
         */
        const root = new TreeNode(1, null, new TreeNode(2, null, new TreeNode(3)));
        const expected = new TreeNode(1, new TreeNode(2, new TreeNode(3)));
        expect(invertTree(root)).toEqual(expected);
    });

    test("Complex Tree", () => {
        /*
         * Input Tree:
         *         10
         *        /  \
         *       6    15
         *      / \     \
         *     3   8     20
         *
         * Output Tree:
         *         10
         *        /  \
         *       15    6
         *      /     / \
         *     20    8   3
         */
        const root = new TreeNode(
            10,
            new TreeNode(6, new TreeNode(3), new TreeNode(8)),
            new TreeNode(15, null, new TreeNode(20))
        );
        const expected = new TreeNode(
            10,
            new TreeNode(15, new TreeNode(20)),
            new TreeNode(6, new TreeNode(8), new TreeNode(3))
        );
        expect(invertTree(root)).toEqual(expected);
    });
});
