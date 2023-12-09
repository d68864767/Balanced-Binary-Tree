const { TreeNode } = require('./TreeNode');
const { isBalanced } = require('./BalancedTreeChecker');

// Helper function to create a binary tree from an array representation
function createBinaryTreeFromArray(arr) {
  if (!arr.length) return null;

  const root = new TreeNode(arr[0]);
  const queue = [root];
  let i = 1;

  while (i < arr.length && queue.length) {
    const current = queue.shift();
    if (arr[i] !== null) {
      current.left = new TreeNode(arr[i]);
      queue.push(current.left);
    }
    i++;

    if (i < arr.length && arr[i] !== null) {
      current.right = new TreeNode(arr[i]);
      queue.push(current.right);
    }
    i++;
  }

  return root;
}

// Test cases
const testCases = [
  {
    array: [3, 9, 20, null, null, 15, 7],
    expected: true
  },
  {
    array: [1, 2, 2, 3, 3, null, null, 4, 4],
    expected: false
  },
  {
    array: [],
    expected: true
  },
  {
    array: [1],
    expected: true
  },
  {
    array: [1, 2, 2, 3, null, null, 3, 4, null, null, 4],
    expected: false
  }
];

testCases.forEach((testCase, index) => {
  const tree = createBinaryTreeFromArray(testCase.array);
  const result = isBalanced(tree);
  console.log(`Test Case ${index + 1}: Expected ${testCase.expected}, got ${result}`);
  console.assert(result === testCase.expected, `Test Case ${index + 1} failed!`);
});

console.log('All tests completed.');
