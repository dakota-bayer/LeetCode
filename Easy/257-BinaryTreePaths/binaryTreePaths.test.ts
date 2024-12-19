import { binaryTreePaths } from "./binaryTreePaths";
import { createTreeNode } from "../../Shared/TreeNode";

describe("binaryTreePaths", () => {
    test("Example 1: Tree [1, 2, 3, null, 5]", () => {
        /*
                 1
               /   \
              2     3
               \
                5
        */
        const root = createTreeNode(
            1,
            createTreeNode(2, null, createTreeNode(5)),
            createTreeNode(3)
        );
        const result = binaryTreePaths(root);
        const expectedOutput = ["1->2->5", "1->3"];
        expect(result.sort()).toEqual(expectedOutput.sort());
    });

    test("Example 2: Single-node tree [1]", () => {
        /*
                1
        */
        const root = createTreeNode(1);
        const result = binaryTreePaths(root);
        const expectedOutput = ["1"];
        expect(result).toEqual(expectedOutput);
    });

    test("Edge Case: Null root (empty tree)", () => {
        const root = null;
        const result = binaryTreePaths(root);
        const expectedOutput: string[] = [];
        expect(result).toEqual(expectedOutput);
    });

    test("Edge Case: Tree with only left children", () => {
        /*
                 1
                /
               2
              /
             3
        */
        const root = createTreeNode(
            1,
            createTreeNode(2, createTreeNode(3))
        );
        const result = binaryTreePaths(root);
        const expectedOutput = ["1->2->3"];
        expect(result).toEqual(expectedOutput);
    });

    test("Edge Case: Tree with only right children", () => {
        /*
                 1
                  \
                   2
                    \
                     3
        */
        const root = createTreeNode(
            1,
            null,
            createTreeNode(2, null, createTreeNode(3))
        );
        const result = binaryTreePaths(root);
        const expectedOutput = ["1->2->3"];
        expect(result).toEqual(expectedOutput);
    });

    test("Tree with multiple paths of varying depths", () => {
        /*
                 1
               /   \
              2     3
             /       \
            4         5
        */
        const root = createTreeNode(
            1,
            createTreeNode(2, createTreeNode(4)),
            createTreeNode(3, null, createTreeNode(5))
        );
        const result = binaryTreePaths(root);
        const expectedOutput = ["1->2->4", "1->3->5"];
        expect(result.sort()).toEqual(expectedOutput.sort());
    });
});
