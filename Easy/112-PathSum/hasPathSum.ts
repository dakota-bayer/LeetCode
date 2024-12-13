/* 112. Path Sum

Given the root of a binary tree and an integer targetSum, 
    return true if the tree has a root-to-leaf path such that 
    adding up all the values along the path equals targetSum.

A leaf is a node with no children.

Example 1:
    Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
    Output: true
    Explanation: The root-to-leaf path with the target sum is shown.

Example 2:
    Input: root = [1,2,3], targetSum = 5
    Output: false
    Explanation: There are two root-to-leaf paths in the tree:
    (1 --> 2): The sum is 3.
    (1 --> 3): The sum is 4.
    There is no root-to-leaf path with sum = 5.

Example 3:
    Input: root = [], targetSum = 0
    Output: false
    Explanation: Since the tree is empty, there are no root-to-leaf paths.

Constraints:
    The number of nodes in the tree is in the range [0, 5000].
    -1000 <= Node.val <= 1000
    -1000 <= targetSum <= 1000
*/

import { TreeNode } from "../../Shared/TreeNode";

// Iterative DFS
export function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    if (!root) {
        return false;
    }

    const stack: [TreeNode, number][] = [];
    stack.push([root, root.val]);

    while (stack.length > 0) {
        const [node, currentSum] = stack.pop()!;

        if (!node.left && !node.right && currentSum === targetSum) {
            return true;
        }

        if (node.left) {
            stack.push([node.left, currentSum + node.left.val]);
        }

        if (node.right) {
            stack.push([node.right, currentSum + node.right.val]);
        }
    }

    return false;
}

// Using recusion for DFS
export function hasPathSum2(root: TreeNode | null, targetSum: number): boolean {
    if (!root) {
        return false;
    }

    if (!root.left && !root.right && root.val === targetSum) {
        return true;
    }

    return hasPathSumRecursive(root.left, root.val, targetSum) ||
        hasPathSumRecursive(root.right, root.val, targetSum);
};

function hasPathSumRecursive(node: TreeNode | null, currentSum: number, targetSum: number): boolean {
    if (!node) {
        return false;
    }

    currentSum += node.val;

    if (!node.left && !node.right && currentSum === targetSum) {
        return true;
    }

    return hasPathSumRecursive(node.left, currentSum, targetSum) || hasPathSumRecursive(node.right, currentSum, targetSum);
}