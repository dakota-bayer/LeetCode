/* 543. Diameter of Binary Tree (rated as easy but found it difficult)

Given the root of a binary tree, return the length of the diameter of the tree.

The diameter of a binary tree is the length of the longest path between any two nodes in a tree. 
    This path may or may not pass through the root.

The length of a path between two nodes is represented by the number of edges between them.

Example 1:
    Input: root = [1,2,3,4,5]
    Output: 3
    Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].

Example 2:
    Input: root = [1,2]
    Output: 1

Constraints:

    The number of nodes in the tree is in the range [1, 10^4].
    -100 <= Node.val <= 100
*/

import { TreeNode } from "../../Shared/TreeNode";

export function diameterOfBinaryTree(root: TreeNode | null): number {
    let longestPath = 0;

    function dfs(node: TreeNode | null): number {
        if (!node) {
            return 0;
        }
        const depthLeft = dfs(node.left);
        const depthRight = dfs(node.right);

        // update the function-scope variable - because we now have a longest path
        longestPath = Math.max(longestPath, depthLeft + depthRight);

        // but we still need to compare the path between max depth of these two and this node's cousin
        return Math.max(depthLeft, depthRight) + 1;
    }

    dfs(root);

    return longestPath;
};

/*
 *            1
 *           / \
 *          2   3
 *         / \
 *        4   5
 *       / \ / \
 *      6  7 8  9
 *     /         \
 *    10          11
 */

// Return the higher of the two
//  1. max depth left + max depth right
//  2. current max left + max depth right
//  3. current max right = max depth left