/* 637. Average of Levels in Binary Tree

Given the root of a binary tree, return the average value of the
    nodes on each level in the form of an array. 
Answers within 10^-5 of the actual answer will be accepted.

Example 1:
    Input: root = [ 3, 9, 20, null, null, 15, 7 ]
    Output: [ 3.00000, 14.50000, 11.00000 ]
    Explanation: The average value of nodes on level 0 is 3, on level 1 is 14.5, and on level 2 is 11.
        Hence return [3, 14.5, 11].

Example 2:
    Input: root = [3,9,20,15,7]
    Output: [3.00000,14.50000,11.00000]

Constraints:
    The number of nodes in the tree is in the range [1, 10^4].
    -2^31 <= Node.val <= 2^31 - 1

*/

// SEE IMAGE ON LEET CODE FOR CLEAR UNDERSTANDING

import { TreeNode } from "../../Shared/TreeNode";

export function averageOfLevels(root: TreeNode | null): number[] {
    if (!root) {
        return [];
    }

    const results: number[] = [];
    const queue: TreeNode[] = [];
    queue.push(root);

    while (queue.length > 0) {
        let levelLength = queue.length;
        let sum = 0;

        for (let i = 0; i < levelLength; i++) {
            const node = queue.shift();
            sum += node?.val ?? 0;
            if (node?.left) queue.push(node.left);
            if (node?.right) queue.push(node.right);
        }

        results.push(parseFloat((sum / levelLength).toFixed(5)));
    }

    return results;
};