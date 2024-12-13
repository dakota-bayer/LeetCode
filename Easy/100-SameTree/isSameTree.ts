/* 100. Same Tree

Given the roots of two binary trees p and q, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

Example 1:
    Input: p = [1,2,3], q = [1,2,3]
    Output: true

Example 2:
    Input: p = [1,2], q = [1,null,2]
    Output: false

Example 3:
    Input: p = [1,2,1], q = [1,1,2]
    Output: false

Constraints:
    The number of nodes in both trees is in the range [0, 100].
    -10^4 <= Node.val <= 10^4

*/

import { TreeNode } from "../../Shared/TreeNode";

export function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    if (!p && !q) {
        // If both are null
        return true;
    }
    else if (!p || !q) {
        // If one is null and one is non-null
        return false
    }
    else {
        return p.val === q.val &&
            isSameTree(p.left, q.left) &&
            isSameTree(p.right, q.right);
    }
};

// Perform BFS on both trees simultaneously checking each node as it traverses
export function isSameTreeBFS(p: TreeNode | null, q: TreeNode | null): boolean {
    if (!p !== !q) {
        // If one is null and one is non-null
        return false
    }

    if (!p && !q) {
        // If both are null
        return true;
    }

    const pQueue: (TreeNode | null)[] = [p!];
    const qQueue: (TreeNode | null)[] = [q!];

    while (pQueue.length > 0) {
        const pQueueLength = pQueue.length;
        const qQueueLength = qQueue.length;

        if (pQueueLength !== qQueueLength) return false;

        for (let i = 0; i < pQueueLength; i++) {
            const pNode = pQueue.shift();
            const qNode = qQueue.shift();

            if (!pNode !== !qNode) {
                // If one is null and one is non-null
                return false;
            }

            if (!pNode || !qNode) {
                // At this point, both are null or non-null
                // So if one is null, they both are and we can continue
                continue;
            }

            if (pNode.val !== qNode.val) {
                // If their values aren't the same
                return false;
            }

            pQueue.push(pNode.right);
            pQueue.push(pNode.left);

            qQueue.push(qNode.right);
            qQueue.push(qNode.left);
        }
    }

    return true;
};