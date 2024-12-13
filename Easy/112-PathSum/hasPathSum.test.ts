import { hasPathSum } from "./hasPathSum";
import { TreeNode } from "../../Shared/TreeNode";

/*
Tree for Example 1:
        5
       / \
      4   8
     /   / \
    11  13  4
   /  \
  7    2
*/
describe("hasPathSum", () => {
    test("Example 1: Tree with targetSum = 22", () => {
        const root = new TreeNode(
            5,
            new TreeNode(4, new TreeNode(11, new TreeNode(7), new TreeNode(2))),
            new TreeNode(8, new TreeNode(13), new TreeNode(4, null, new TreeNode(1)))
        );
        expect(hasPathSum(root, 22)).toBe(true);
    });

    /*
    Tree for Example 2:
            1
           / \
          2   3
    */
    test("Example 2: Tree with targetSum = 5", () => {
        const root = new TreeNode(1, new TreeNode(2), new TreeNode(3));
        expect(hasPathSum(root, 5)).toBe(false);
    });

    /*
    Tree for Example 3:
    Empty tree
    */
    test("Example 3: Empty tree", () => {
        const root = null;
        expect(hasPathSum(root, 0)).toBe(false);
    });

    /*
    Tree with all left children:
            1
           /
          2
         /
        3
    */
    test("Tree with all left children and targetSum = 6", () => {
        const root = new TreeNode(1, new TreeNode(2, new TreeNode(3)));
        expect(hasPathSum(root, 6)).toBe(true);
    });

    /*
    Tree with all right children:
            1
             \
              2
               \
                3
    */
    test("Tree with all right children and targetSum = 5", () => {
        const root = new TreeNode(1, null, new TreeNode(2, null, new TreeNode(3)));
        expect(hasPathSum(root, 5)).toBe(false);
    });

    /*
    Complex tree:
             10
           /   \
         5      -3
        / \       \
       3   2       11
      / \   \
     3  -2   1
    */
    test("Complex tree with targetSum = 18", () => {
        const root = new TreeNode(
            10,
            new TreeNode(5, new TreeNode(3, new TreeNode(3), new TreeNode(-2)), new TreeNode(2, null, new TreeNode(1))),
            new TreeNode(-3, null, new TreeNode(11))
        );
        expect(hasPathSum(root, 18)).toBe(true);
    });

    /*
    Tree with negative values:
            -2
              \
              -3
    */
    test("Tree with negative values and targetSum = -5", () => {
        const root = new TreeNode(-2, null, new TreeNode(-3));
        expect(hasPathSum(root, -5)).toBe(true);
    });

    test("single node with val = target", () => {
        const root = new TreeNode(1);
        expect(hasPathSum(root, 1)).toBe(true);
    });

    test("root with one child where root.val == target", () => {
        /*
                1
               /
              2
        */
        const root = new TreeNode(1, new TreeNode(2));
        expect(hasPathSum(root, 1)).toBe(false);
    });
});
