import { sortedArrayToBST } from "./sortedArrayToBST";
import { TreeNode } from "../../Shared/TreeNode";

// Utility function to check if a tree is height-balanced
function isBalanced(root: TreeNode | null): boolean {
  if (!root) return true;

  function getHeight(node: TreeNode | null): number {
    if (!node) return 0;
    const leftHeight = getHeight(node.left);
    const rightHeight = getHeight(node.right);
    if (
      leftHeight === -1 ||
      rightHeight === -1 ||
      Math.abs(leftHeight - rightHeight) > 1
    ) {
      return -1; // Not balanced
    }
    return Math.max(leftHeight, rightHeight) + 1;
  }

  return getHeight(root) !== -1;
}

// Utility function to validate BST property
function isBST(
  node: TreeNode | null,
  min: number | null,
  max: number | null
): boolean {
  if (!node) return true;
  if ((min !== null && node.val <= min) || (max !== null && node.val >= max)) {
    return false;
  }
  return isBST(node.left, min, node.val) && isBST(node.right, node.val, max);
}

describe("sortedArrayToBST", () => {
  it("should create a height-balanced BST for input [-10, -3, 0, 5, 9]", () => {
    const nums = [-10, -3, 0, 5, 9];
    const root = sortedArrayToBST(nums);

    /**
     * Possible Tree 1:
     *        0
     *       / \
     *     -3   9
     *     /   /
     *   -10  5
     *
     * Possible Tree 2:
     *        0
     *       / \
     *     -10  5
     *       \    \
     *       -3    9
     */

    expect(root).not.toBeNull();
    expect(isBalanced(root)).toBe(true);
    expect(isBST(root, null, null)).toBe(true);
  });

  it("should create a height-balanced BST for input [1, 3]", () => {
    const nums = [1, 3];
    const root = sortedArrayToBST(nums);

    /**
     * Possible Tree 1:
     *      3
     *     /
     *    1
     *
     * Possible Tree 2:
     *      1
     *       \
     *        3
     */

    expect(root).not.toBeNull();
    expect(isBalanced(root)).toBe(true);
    expect(isBST(root, null, null)).toBe(true);
  });

  it("should handle an array with a single element [5]", () => {
    const nums = [5];
    const root = sortedArrayToBST(nums);

    /**
     * Tree:
     *      5
     */

    expect(root).not.toBeNull();
    expect(root?.val).toBe(5);
    expect(root?.left).toBeNull();
    expect(root?.right).toBeNull();
    expect(isBalanced(root)).toBe(true);
    expect(isBST(root, null, null)).toBe(true);
  });

  it("should return null for an empty array", () => {
    const nums: number[] = [];
    const root = sortedArrayToBST(nums);

    /**
     * Tree:
     *    (null)
     */

    expect(root).toBeNull();
  });

  it("should handle a large array", () => {
    const nums = Array.from({ length: 1000 }, (_, i) => i + 1);
    const root = sortedArrayToBST(nums);

    /**
     * Tree structure varies depending on implementation, but:
     * - Must be height-balanced
     * - Must satisfy BST property
     */

    expect(root).not.toBeNull();
    expect(isBalanced(root)).toBe(true);
    expect(isBST(root, null, null)).toBe(true);
  });
});
