import { inorderTraversal } from './inorderTraversal';
import { TreeNode } from '../../Shared/TreeNode'

describe('inorderTraversal', () => {
    /**
     * Example 1:
     * Tree structure:
     *     1
     *      \
     *       2
     *      /
     *     3
     * Input: [1, null, 2, 3]
     * Output: [1, 3, 2]
     */
    it('should return [1, 3, 2] for tree [1, null, 2, 3]', () => {
        const root = new TreeNode(1, null, new TreeNode(2, new TreeNode(3)));
        expect(inorderTraversal(root)).toEqual([1, 3, 2]);
    });

    /**
     * Example 2:
     * Tree structure:
     *         1
     *       /   \
     *      2     3
     *     / \      \
     *    4   5      8
     *       / \    /
     *      6   7  9
     * Input: [1, 2, 3, 4, 5, null, 8, null, null, 6, 7, 9]
     * Output: [4, 2, 6, 5, 7, 1, 3, 9, 8]
     */
    it('should return [4, 2, 6, 5, 7, 1, 3, 9, 8] for a larger tree', () => {
        const root = new TreeNode(
            1,
            new TreeNode(2, new TreeNode(4), new TreeNode(5, new TreeNode(6), new TreeNode(7))),
            new TreeNode(3, null, new TreeNode(8, new TreeNode(9)))
        );
        expect(inorderTraversal(root)).toEqual([4, 2, 6, 5, 7, 1, 3, 9, 8]);
    });

    /**
     * Example 3:
     * Tree structure: (empty tree)
     * Input: []
     * Output: []
     */
    it('should return [] for an empty tree', () => {
        expect(inorderTraversal(null)).toEqual([]);
    });

    /**
     * Example 4:
     * Tree structure:
     *     1
     * Input: [1]
     * Output: [1]
     */
    it('should return [1] for a single-node tree', () => {
        const root = new TreeNode(1);
        expect(inorderTraversal(root)).toEqual([1]);
    });

    /**
     * Custom Case:
     * Tree structure:
     *         5
     *        /
     *       3
     *        \
     *         4
     * Input: [5, 3, null, null, 4]
     * Output: [3, 4, 5]
     */
    it('should handle trees with unbalanced left children', () => {
        const root = new TreeNode(5, new TreeNode(3, null, new TreeNode(4)));
        expect(inorderTraversal(root)).toEqual([3, 4, 5]);
    });
});
