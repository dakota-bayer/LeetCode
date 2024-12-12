/* 111. Minimum Depth of Binary Tree

Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest 
    path from the root node down to the nearest leaf node.

Note: A leaf is a node with no children.

Example 1:
    Input: root = [3,9,20,null,null,15,7]
    Output: 2

Example 2:
    Input: root = [2,null,3,null,4,null,5,null,6]
    Output: 5

Constraints:
    The number of nodes in the tree is in the range [0, 10^5].
    -1000 <= Node.val <= 1000

*/

import { TreeNode } from "../../Shared/TreeNode";

export function minDepthBfs(root: TreeNode | null): number {
    if (!root) {
        return 0;
    }

    let depth = 1;
    let queue: TreeNode[] = [];
    queue.push(root);

    while (queue.length > 0) {
        const nodesInLevel = queue.length;

        for (let i = 0; i < nodesInLevel; i++) {
            const node = queue.shift()!;
            if (!node.left && !node.right) {
                return depth;
            }

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        depth++;
    }

    return depth;
};

export function minDepth(root: TreeNode | null): number {
    if (!root) return 0;
    return minDepthRecursive(root, 1);
};

function minDepthRecursive(node: TreeNode, depth: number): number {
    if (!node.right && !node.left) {
        return depth;
    }

    const r: number = node?.right ? minDepthRecursive(node.right, depth + 1) : Number.POSITIVE_INFINITY;
    const l: number = node?.left ? minDepthRecursive(node.left, depth + 1) : Number.POSITIVE_INFINITY;

    return Math.min(r, l);
}