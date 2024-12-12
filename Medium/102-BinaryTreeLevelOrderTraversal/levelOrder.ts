/* 102. Binary Tree Level Order Traversal

Given the root of a binary tree, return the level order traversal of its 
    nodes' values. (i.e., from left to right, level by level).

Example 1:
    Input: root = [3,9,20,null,null,15,7]
    Output: [[3],[9,20],[15,7]]

Example 2:
    Input: root = [1]
    Output: [[1]]

Example 3:
    Input: root = []
    Output: []

Constraints:
    The number of nodes in the tree is in the range [0, 2000].
    -1000 <= Node.val <= 1000

*/
import { TreeNode } from "../../Shared/TreeNode";

export function levelOrder(root: TreeNode | null): number[][] {
    if (!root) return [];

    const queue: TreeNode[] = [root];
    const result: number[][] = [];

    while (queue.length > 0) {
        const levelSize: number = queue.length;
        const levelVals: number[] = [];

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            if (node) {
                levelVals.push(node.val);
                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);
            }
        }
        if(levelVals.length > 0) {
            result.push(levelVals);
        }
    }

    return result;
};