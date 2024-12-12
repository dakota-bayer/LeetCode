import { minDepth } from "./minDepth";
import { TreeNode } from "../../Shared/TreeNode";

describe("minDepth", () => {
    test("Example 1: Tree with root [3,9,20,null,null,15,7]", () => {
        const root = new TreeNode(
            3,
            new TreeNode(9),
            new TreeNode(20, new TreeNode(15), new TreeNode(7))
        );
        /*
                3
              /   \
             9     20
                  /  \
                15    7
        */
        expect(minDepth(root)).toBe(2);
    });

    test("Example 2: Tree with root [2,null,3,null,4,null,5,null,6]", () => {
        const root = new TreeNode(
            2,
            null,
            new TreeNode(3, null, new TreeNode(4, null, new TreeNode(5, null, new TreeNode(6))))
        );
        /*
                2
                 \
                  3
                   \
                    4
                     \
                      5
                       \
                        6
        */
        expect(minDepth(root)).toBe(5);
    });

    test("Empty tree (root = null)", () => {
        const root = null;
        expect(minDepth(root)).toBe(0);
    });

    test("Single node tree", () => {
        const root = new TreeNode(1);
        expect(minDepth(root)).toBe(1);
    });

    test("Tree with only left children", () => {
        const root = new TreeNode(1, new TreeNode(2, new TreeNode(3)));
        /*
                1
               /
              2
             /
            3
        */
        expect(minDepth(root)).toBe(3);
    });

    test("Tree with only right children", () => {
        const root = new TreeNode(1, null, new TreeNode(2, null, new TreeNode(3)));
        /*
                1
                 \
                  2
                   \
                    3
        */
        expect(minDepth(root)).toBe(3);
    });

    test("Tree with mixed children, mirrored", () => {
        const root = new TreeNode(
            1,
            new TreeNode(2, new TreeNode(4)),
            new TreeNode(3, null, new TreeNode(5))
        );
        /*
                1
              /   \
             2     3
            /       \
           4         5

        */
        expect(minDepth(root)).toBe(3);
    });

    test("Tree with multiple levels and balanced leaves", () => {
        const root = new TreeNode(
            1,
            new TreeNode(2, new TreeNode(4, null, new TreeNode(6))),
            new TreeNode(3, new TreeNode(5))
        );
        /*
                1
              /   \
             2     3
            /       \
           4         5
            \
             6
        */
        expect(minDepth(root)).toBe(3);
    });

    test("Tree with negative values", () => {
        const root = new TreeNode(
            -10,
            new TreeNode(-20),
            new TreeNode(-30, new TreeNode(-40), new TreeNode(-50))
        );
        /*
              -10
             /     \
          -20      -30
                  /    \
               -40     -50
        */
        expect(minDepth(root)).toBe(2);
    });
});
