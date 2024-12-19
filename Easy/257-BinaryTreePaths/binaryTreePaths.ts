/* 257. Binary Tree Paths

Given the root of a binary tree, return all root-to-leaf paths in any order.

A leaf is a node with no children.

Example 1:
    Input: root = [1,2,3,null,5]
    Output: ["1->2->5","1->3"]

Example 2:
    Input: root = [1]
    Output: ["1"]

Constraints:
    The number of nodes in the tree is in the range [1, 100].
    -100 <= Node.val <= 100

*/

import { TreeNode } from "../../Shared/TreeNode";

export function binaryTreePaths(root: TreeNode | null): string[] {
    if (!root) {
        return [];
    }

    const totalPaths: string[] = [];

    traverseTree(root, "", totalPaths);

    return totalPaths;
};

function traverseTree(node: TreeNode, path: string, paths: string[]): void {
    path += node.val;
    if (!node.left && !node.right) {
        paths.push(path);
        return;
    }

    if (node.left) {
        traverseTree(node.left, path + "->", paths);
    }

    if (node.right) {
        traverseTree(node.right, path + "->", paths);
    }
}