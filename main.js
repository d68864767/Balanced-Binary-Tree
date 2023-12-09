const TreeNode = require('./TreeNode');
const BalancedTreeChecker = require('./BalancedTreeChecker');

// Example usage:
// Create a simple balanced binary tree
//     3
//    / \
//   9  20
//     /  \
//    15   7

const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20, new TreeNode(15), new TreeNode(7));

// Instantiate the BalancedTreeChecker
const checker = new BalancedTreeChecker();

// Check if the binary tree is balanced
const isTreeBalanced = checker.isBalanced(root);

// Output the result
console.log('Is the binary tree balanced?', isTreeBalanced);

// The output should be: Is the binary tree balanced? true
