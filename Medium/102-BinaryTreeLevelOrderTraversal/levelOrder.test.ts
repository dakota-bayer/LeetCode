
import { TreeNode } from "../../Shared/TreeNode";
import { levelOrder } from "./levelOrder";

describe("levelOrder", () => {
    test("Example 1: Tree with root [3,9,20,null,null,15,7]", () => {
        const root = new TreeNode(
            3,
            new TreeNode(9),
            new TreeNode(20, new TreeNode(15), new TreeNode(7))
        );
        expect(levelOrder(root)).toEqual([[3], [9, 20], [15, 7]]);
    });

    test("Example 2: Single node tree [1]", () => {
        const root = new TreeNode(1);
        expect(levelOrder(root)).toEqual([[1]]);
    });

    test("Example 3: Empty tree", () => {
        const root = null;
        expect(levelOrder(root)).toEqual([]);
    });

    test("Tree with all left children", () => {
        const root = new TreeNode(1, new TreeNode(2, new TreeNode(3)));
        expect(levelOrder(root)).toEqual([[1], [2], [3]]);
    });

    test("Tree with all right children", () => {
        const root = new TreeNode(1, null, new TreeNode(2, null, new TreeNode(3)));
        expect(levelOrder(root)).toEqual([[1], [2], [3]]);
    });

    test("Complex tree", () => {
        const root = new TreeNode(
            10,
            new TreeNode(2, new TreeNode(3), new TreeNode(4)),
            new TreeNode(6, null, new TreeNode(8))
        );
        expect(levelOrder(root)).toEqual([[10], [2, 6], [3, 4, 8]]);
    });

    test("Tree with negative values", () => {
        const root = new TreeNode(
            -10,
            new TreeNode(-20, new TreeNode(-30), new TreeNode(-40)),
            new TreeNode(-5, null, new TreeNode(-15))
        );
        expect(levelOrder(root)).toEqual([[-10], [-20, -5], [-30, -40, -15]]);
    });
});