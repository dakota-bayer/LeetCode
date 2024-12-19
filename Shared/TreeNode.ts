export class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

export function createTreeNode(
    value: number | null,
    left: TreeNode | null = null,
    right: TreeNode | null = null
): TreeNode | null {
    return value !== null ? new TreeNode(value, left, right) : null;
}