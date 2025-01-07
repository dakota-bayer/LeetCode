import { isSymmetric } from './isSymmetric';
import { TreeNode } from '../../Shared/TreeNode';

describe('isSymmetric', () => {
    /**
     * Example 1:
     * Tree structure:
     *         1
     *       /   \
     *      2     2
     *     / \   / \
     *    3   4 4   3
     * Input: [1,2,2,3,4,4,3]
     * Output: true
     */
    it('should return true for a symmetric tree [1,2,2,3,4,4,3]', () => {
        const root = new TreeNode(
            1,
            new TreeNode(2, new TreeNode(3), new TreeNode(4)),
            new TreeNode(2, new TreeNode(4), new TreeNode(3))
        );
        expect(isSymmetric(root)).toBe(true);
    });

    /**
     * Example 2:
     * Tree structure:
     *         1
     *       /   \
     *      2     2
     *       \     \
     *        3     3
     * Input: [1,2,2,null,3,null,3]
     * Output: false
     */
    it('should return false for an asymmetric tree [1,2,2,null,3,null,3]', () => {
        const root = new TreeNode(
            1,
            new TreeNode(2, null, new TreeNode(3)),
            new TreeNode(2, null, new TreeNode(3))
        );
        expect(isSymmetric(root)).toBe(false);
    });

    /**
     * Custom Case 1:
     * Tree structure:
     *         1
     *       /   \
     *      2     2
     *     /       \
     *    3         3
     * Input: [1,2,2,3,null,null,3]
     * Output: true
     */
    it('should return true for a symmetric tree with missing children [1,2,2,3,null,null,3]', () => {
        const root = new TreeNode(
            1,
            new TreeNode(2, new TreeNode(3), null),
            new TreeNode(2, null, new TreeNode(3))
        );
        expect(isSymmetric(root)).toBe(true);
    });

    /**
     * Custom Case 2:
     * Tree structure:
     *         1
     *       /   \
     *      2     2
     *     / \   / \
     *    3   4 5   3
     * Input: [1,2,2,3,4,5,3]
     * Output: false
     */
    it('should return false for a non-symmetric tree [1,2,2,3,4,5,3]', () => {
        const root = new TreeNode(
            1,
            new TreeNode(2, new TreeNode(3), new TreeNode(4)),
            new TreeNode(2, new TreeNode(5), new TreeNode(3))
        );
        expect(isSymmetric(root)).toBe(false);
    });

    /**
     * Edge Case 1:
     * Tree structure:
     *         1
     * Input: [1]
     * Output: true
     */
    it('should return true for a single-node tree [1]', () => {
        const root = new TreeNode(1);
        expect(isSymmetric(root)).toBe(true);
    });

    /**
     * Edge Case 2:
     * Tree structure: (empty tree)
     * Input: []
     * Output: true
     */
    it('should return true for an empty tree', () => {
        expect(isSymmetric(null)).toBe(true);
    });

    /**
     * Custom Case:
     * Tree structure:
     *         1
     *       /   \
     *      2     2
     *     /     / 
     *    2     2   
     * Input: [1,2,2,2,null,2]
     * Output: false
     */
    it('should return false for the tree [1,2,2,2,null,2]', () => {
        const root = new TreeNode(
            1,
            new TreeNode(2, new TreeNode(2), null),
            new TreeNode(2, new TreeNode(2), null)
        );
        expect(isSymmetric(root)).toBe(false);
    });
});
