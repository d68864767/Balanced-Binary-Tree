class BalancedTreeChecker {
  constructor() {
    this.isBalancedTree = true;
  }

  checkHeight(node) {
    if (node === null) {
      return -1;
    }

    let leftHeight = this.checkHeight(node.left);
    if (leftHeight === Number.MIN_SAFE_INTEGER) return Number.MIN_SAFE_INTEGER;

    let rightHeight = this.checkHeight(node.right);
    if (rightHeight === Number.MIN_SAFE_INTEGER) return Number.MIN_SAFE_INTEGER;

    let heightDiff = Math.abs(leftHeight - rightHeight);
    if (heightDiff > 1) {
      return Number.MIN_SAFE_INTEGER; // Found unbalanced subtree, propagate failure
    } else {
      return Math.max(leftHeight, rightHeight) + 1; // Return height
    }
  }

  isBalanced(root) {
    return this.checkHeight(root) !== Number.MIN_SAFE_INTEGER;
  }
}

module.exports = BalancedTreeChecker;
