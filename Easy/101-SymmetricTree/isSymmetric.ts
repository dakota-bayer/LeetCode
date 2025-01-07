/* 101. Symmetric Tree

Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

Example 1:
    Input: root = [1,2,2,3,4,4,3]
    Output: true

Example 2:
    Input: root = [1,2,2,null,3,null,3]
    Output: false

Constraints:
    The number of nodes in the tree is in the range [1, 1000].
    -100 <= Node.val <= 100
 
Follow up: Could you solve it both recursively and iteratively?

*/

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

import { TreeNode } from "../../Shared/TreeNode";

export function isSymmetric(root: TreeNode | null): boolean {
    function isMirror(node1: TreeNode | null, node2: TreeNode | null): boolean {
        if (!node1 && !node2) {
            return true;
        }

        if (!node1 || !node2) {
            return false;
        }

        return node1.val === node2.val && isMirror(node1.left, node2.right) && isMirror(node1.right, node2.left);
    }

    return isMirror(root, root);
}

export function isSymmetric2(root: TreeNode | null): boolean {
    if (!root) return true;

    const left: number[] = [];
    const right: number[] = [];

    function dfs(node: TreeNode | null, inverted: boolean, output: (number | null)[]): void {
        if (!node) {
            output.push(null);
            return;
        }

        output.push(node.val);
        dfs(inverted ? node.left : node.right, inverted, output);
        dfs(inverted ? node.right : node.left, inverted, output);
    }

    dfs(root.left, false, left);
    dfs(root.right, true, right);

    if (left.length !== right.length) {
        return false;
    }
    for (let i = 0; i < left.length; i++) {
        if (left[i] !== right[i]) {
            return false;
        }
    }

    return true;
};

const root = new TreeNode(
    1,
    new TreeNode(2, new TreeNode(2), null),
    new TreeNode(2, null, new TreeNode(2))
);

isSymmetric(root);