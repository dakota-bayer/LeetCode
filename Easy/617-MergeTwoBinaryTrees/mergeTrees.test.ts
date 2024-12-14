import { TreeNode } from "../../Shared/TreeNode";
import { mergeTrees } from "./mergeTrees";

describe("mergeTrees", () => {
    test("Example 1: Merge two full binary trees", () => {
        /*
         * Tree 1:       1
         *             /   \
         *            3     2
         *           /
         *          5
         *
         * Tree 2:       2
         *             /   \
         *            1     3
         *             \      \
         *              4      7
         *
         * Merged Tree:  3
         *             /   \
         *            4     5
         *           / \      \
         *          5   4      7
         */
        const root1 = new TreeNode(
            1,
            new TreeNode(3, new TreeNode(5)),
            new TreeNode(2)
        );
        const root2 = new TreeNode(
            2,
            new TreeNode(1, null, new TreeNode(4)),
            new TreeNode(3, null, new TreeNode(7))
        );
        const mergedTree = mergeTrees(root1, root2);

        expect(mergedTree).toEqual(
            new TreeNode(
                3,
                new TreeNode(4, new TreeNode(5), new TreeNode(4)),
                new TreeNode(5, null, new TreeNode(7))
            )
        );
    });

    test("Example 2: One tree is a single node, other has a single left child", () => {
        /*
         * Tree 1:       1
         *
         * Tree 2:       1
         *              /
         *             2
         *
         * Merged Tree:  2
         *              /
         *             2
         */
        const root1 = new TreeNode(1);
        const root2 = new TreeNode(1, new TreeNode(2));
        const mergedTree = mergeTrees(root1, root2);

        expect(mergedTree).toEqual(new TreeNode(2, new TreeNode(2)));
    });

    test("Tree 1 is null", () => {
        /*
         * Tree 1:    null
         *
         * Tree 2:       1
         *              / \
         *             2   3
         *
         * Merged Tree:  1
         *              / \
         *             2   3
         */
        const root1 = null;
        const root2 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
        const mergedTree = mergeTrees(root1, root2);

        expect(mergedTree).toEqual(new TreeNode(1, new TreeNode(2), new TreeNode(3)));
    });

    test("Tree 2 is null", () => {
        /*
         * Tree 1:       4
         *             /   \
         *            2     6
         *
         * Tree 2:    null
         *
         * Merged Tree:  4
         *              / \
         *             2   6
         */
        const root1 = new TreeNode(4, new TreeNode(2), new TreeNode(6));
        const root2 = null;
        const mergedTree = mergeTrees(root1, root2);

        expect(mergedTree).toEqual(new TreeNode(4, new TreeNode(2), new TreeNode(6)));
    });

    test("Both trees are null", () => {
        /*
         * Tree 1:    null
         *
         * Tree 2:    null
         *
         * Merged Tree: null
         */
        const root1 = null;
        const root2 = null;
        const mergedTree = mergeTrees(root1, root2);

        expect(mergedTree).toBeNull();
    });

    test("Trees with complex structure and uneven depths", () => {
        /*
         * Tree 1:       1
         *             /   \
         *            2     3
         *           / \
         *          4   5
         *
         * Tree 2:       6
         *             /
         *            7
         *           /
         *          8
         *
         * Merged Tree:  7
         *             /   \
         *            9     3
         *           / \
         *          12  5
         */
        const root1 = new TreeNode(
            1,
            new TreeNode(2, new TreeNode(4), new TreeNode(5)),
            new TreeNode(3)
        );
        const root2 = new TreeNode(6, new TreeNode(7, new TreeNode(8)));
        const mergedTree = mergeTrees(root1, root2);

        expect(mergedTree).toEqual(
            new TreeNode(
                7,
                new TreeNode(9, new TreeNode(12), new TreeNode(5)),
                new TreeNode(3)
            )
        );
    });
});
