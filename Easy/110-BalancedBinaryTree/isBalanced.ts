/* 110. Balanced Binary Tree

Given a binary tree, determine if it is height-balanced.
A height-balanced binary tree is a binary tree in which the depth of 
    the two subtrees of every node never differs by more than one.

Example 1:
    Input: root = [3,9,20,null,null,15,7]
    Output: true

Example 2:
    Input: root = [1,2,2,3,3,null,null,4,4]
    Output: false

Example 3:
    Input: root = []
    Output: true

Constraints:
    The number of nodes in the tree is in the range [0, 5000].
    -10^4 <= Node.val <= 10^4
*/

import { TreeNode } from "../../Shared/TreeNode";

export function isBalanced(root: TreeNode | null): boolean {
    if (!root) return true;
    const depth = getDepth(root, 0);

    return depth > 0;
};

function getDepth(node: TreeNode | null, depth: number): number {
    if (!node) return depth;

    const depthLeft = getDepth(node.left, depth + 1);
    const depthRight = getDepth(node.right, depth + 1);

    if (Math.abs(depthLeft - depthRight) > 1) return -1;

    return Math.max(depthLeft, depthRight);
}