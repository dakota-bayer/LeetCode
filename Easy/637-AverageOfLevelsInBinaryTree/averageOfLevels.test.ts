import { averageOfLevels } from "./averageOfLevels";
import { TreeNode } from "../../Shared/TreeNode";

describe("averageOfLevels", () => {
    test("Example 1: Tree with root [3, 9, 20, null, null, 15, 7]", () => {
        const root = new TreeNode(
            3,
            new TreeNode(9),
            new TreeNode(20, new TreeNode(15), new TreeNode(7))
        );
        expect(averageOfLevels(root)).toEqual([3.0, 14.5, 11.0]);
    });

    test("Example 2: Tree with root [3, 9, 20, 15, 7]", () => {
        const root = new TreeNode(
            3,
            new TreeNode(9, new TreeNode(15), new TreeNode(7)),
            new TreeNode(20)
        );
        expect(averageOfLevels(root)).toEqual([3.0, 14.5, 11.0]);
    });

    test("Single node tree", () => {
        const root = new TreeNode(5);
        expect(averageOfLevels(root)).toEqual([5.0]);
    });

    test("Tree with all left children", () => {
        const root = new TreeNode(1, new TreeNode(2, new TreeNode(3)));
        expect(averageOfLevels(root)).toEqual([1.0, 2.0, 3.0]);
    });

    test("Tree with all right children", () => {
        const root = new TreeNode(1, null, new TreeNode(2, null, new TreeNode(3)));
        expect(averageOfLevels(root)).toEqual([1.0, 2.0, 3.0]);
    });

    test("Complex tree", () => {
        const root = new TreeNode(
            10,
            new TreeNode(2, new TreeNode(3), new TreeNode(4)),
            new TreeNode(6, null, new TreeNode(8))
        );
        expect(averageOfLevels(root)).toEqual([10.0, 4.0, 5.0]);
    });

    test("Tree with negative values", () => {
        const root = new TreeNode(
            -10,
            new TreeNode(-20, new TreeNode(-30), new TreeNode(-40)),
            new TreeNode(-5, null, new TreeNode(-15))
        );
        expect(averageOfLevels(root)).toEqual([-10.0, -12.5, -28.33333]);
    });
});
