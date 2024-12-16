import { TreeNode } from "../../Shared/TreeNode";
import { isSubtree } from "./isSubtree";

describe("isSubtree", () => {
    test("Example 1: Tree contains subtree", () => {
        /*
         * root:
         *          3
         *         / \
         *        4   5
         *       / \
         *      1   2
         *
         * subRoot:
         *          4
         *         / \
         *        1   2
         */
        const root = new TreeNode(
            3,
            new TreeNode(4, new TreeNode(1), new TreeNode(2)),
            new TreeNode(5)
        );

        const subRoot = new TreeNode(4, new TreeNode(1), new TreeNode(2));

        expect(isSubtree(root, subRoot)).toBe(true);
    });

    test("Example 2: Tree does not contain subtree", () => {
        /*
         * root:
         *          3
         *         / \
         *        4   5
         *       / \
         *      1   2
         *         /
         *        0
         *
         * subRoot:
         *          4
         *         / \
         *        1   2
         */
        const root = new TreeNode(
            3,
            new TreeNode(4, new TreeNode(1), new TreeNode(2, new TreeNode(0))),
            new TreeNode(5)
        );

        const subRoot = new TreeNode(4, new TreeNode(1), new TreeNode(2));

        expect(isSubtree(root, subRoot)).toBe(false);
    });

    test("SubRoot is the same as root", () => {
        /*
         * root:
         *          1
         *         / \
         *        2   3
         *
         * subRoot:
         *          1
         *         / \
         *        2   3
         */
        const root = new TreeNode(1, new TreeNode(2), new TreeNode(3));
        const subRoot = new TreeNode(1, new TreeNode(2), new TreeNode(3));

        expect(isSubtree(root, subRoot)).toBe(true);
    });

    test("SubRoot is null", () => {
        /*
         * root:
         *          1
         *         / \
         *        2   3
         *
         * subRoot:
         *          null
         */
        const root = new TreeNode(1, new TreeNode(2), new TreeNode(3));
        const subRoot = null;

        expect(isSubtree(root, subRoot)).toBe(false); // A null subtree will not be valid.
    });

    test("Root is null", () => {
        /*
         * root:
         *          null
         *
         * subRoot:
         *          1
         *         / \
         *        2   3
         */
        const root = null;
        const subRoot = new TreeNode(1, new TreeNode(2), new TreeNode(3));

        expect(isSubtree(root, subRoot)).toBe(false); // A non-null subtree cannot exist in a null tree.
    });

    test("SubRoot is deeper than root", () => {
        /*
         * root:
         *          1
         *
         * subRoot:
         *          1
         *         / \
         *        2   3
         */
        const root = new TreeNode(1);
        const subRoot = new TreeNode(1, new TreeNode(2), new TreeNode(3));

        expect(isSubtree(root, subRoot)).toBe(false);
    });

    test("Complex tree with valid subtree", () => {
        /*
         * root:
         *              10
         *             /  \
         *            5    15
         *           / \
         *          3   7
         *         /
         *        2
         *
         * subRoot:
         *          5
         *         / \
         *        3   7
         *       /
         *      2
         */
        const root = new TreeNode(
            10,
            new TreeNode(5, new TreeNode(3, new TreeNode(2)), new TreeNode(7)),
            new TreeNode(15)
        );

        const subRoot = new TreeNode(
            5,
            new TreeNode(3, new TreeNode(2)),
            new TreeNode(7)
        );

        expect(isSubtree(root, subRoot)).toBe(true);
    });

    test("Complex tree without valid subtree", () => {
        /*
         * root:
         *              10
         *             /  \
         *            5    15
         *           / \
         *          3   7
         *         /
         *        2
         *
         * subRoot:
         *          5
         *         / \
         *        3   7
         *             \
         *              8
         */
        const root = new TreeNode(
            10,
            new TreeNode(5, new TreeNode(3, new TreeNode(2)), new TreeNode(7)),
            new TreeNode(15)
        );

        const subRoot = new TreeNode(
            5,
            new TreeNode(3),
            new TreeNode(7, null, new TreeNode(8))
        );

        expect(isSubtree(root, subRoot)).toBe(false);
    });
});
