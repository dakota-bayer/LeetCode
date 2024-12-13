/* 104. Maximum Depth of Binary Tree

Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the 
    longest path from the root node down to the farthest leaf node.

Example 1:
    Input: root = [3,9,20,null,null,15,7]
    Output: 3

Example 2:
    Input: root = [1,null,2]
    Output: 2

Constraints:
    The number of nodes in the tree is in the range [0, 10^4].
    -100 <= Node.val <= 100

*/

import { TreeNode } from "../../Shared/TreeNode";

// bottom up counting
export function maxDepth(root: TreeNode | null): number {
    if (!root) {
        return 0;
    }

    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

// top down counting
export function maxDepth2(root: TreeNode | null): number {
    if (!root) {
        return 0;
    }

    return Math.max(maxDepthRecursive(root.left, 1), maxDepthRecursive(root.right, 1));
};

function maxDepthRecursive(node: TreeNode | null, depth: number): number {
    if (!node) {
        return depth;
    }

    return Math.max(maxDepthRecursive(node.left, depth + 1), maxDepthRecursive(node.right, depth + 1));
}