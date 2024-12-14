/* 617. Merge Two Binary Trees

You are given two binary trees root1 and root2.

Imagine that when you put one of them to cover the other, 
    some nodes of the two trees are overlapped while the others are not. 
You need to merge the two trees into a new binary tree. 
The merge rule is that if two nodes overlap, 
    then sum node values up as the new value of the merged node. 
Otherwise, the NOT null node will be used as the node of the new tree.

Return the merged tree.

Note: The merging process must start from the root nodes of both trees.

Example 1:
    Input: root1 = [1,3,2,5], 
        root2 = [2,1,3,null,4,null,7]
    Output: [3,4,5,5,4,null,7]

Example 2:
    Input: root1 = [1], 
        root2 = [1,2]
    Output: [2,2]

Constraints:
    The number of nodes in both trees is in the range [0, 2000].
    -10^4 <= Node.val <= 10^4

*/

import { TreeNode } from "../../Shared/TreeNode";

export function mergeTrees(root1: TreeNode | null, root2: TreeNode | null): TreeNode | null {
    if (!root1 && !root2) return null;
    if (!root1) return root2;
    if (!root2) return root1;

    const aQueue: (TreeNode | null)[] = [root1];
    const bQueue: (TreeNode | null)[] = [root2];

    while (aQueue.length > 0 && bQueue.length > 0) {
        const nodeA = aQueue.shift()!;
        const nodeB = bQueue.shift()!;

        // Update the value of the current node in tree 1
        nodeA.val += nodeB.val;

        // Handle the left child
        if (nodeA.left && nodeB.left) {
            aQueue.push(nodeA.left);
            bQueue.push(nodeB.left);
        } else if (!nodeA.left && nodeB.left) {
            nodeA.left = nodeB.left;
        }

        // Handle the right child
        if (nodeA.right && nodeB.right) {
            aQueue.push(nodeA.right);
            bQueue.push(nodeB.right);
        } else if (!nodeA.right && nodeB.right) {
            nodeA.right = nodeB.right;
        }
    }

    return root1;
}

// DFS Solution
export function mergeTreesDfs(root1: TreeNode | null, root2: TreeNode | null): TreeNode | null {
    if (!root1 && !root2) return null;
    if (!root1) return root2;
    if (!root2) return root1;

    const root = new TreeNode(root1.val + root2.val);
    root.left = mergeTreesDfs(root1.left, root2.left);
    root.right = mergeTreesDfs(root1.right, root2.right);

    return root;
};