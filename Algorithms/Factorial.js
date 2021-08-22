const assert = require('assert');

const findFactorialIterative = (n) => {
    let result = 1;
    for (let i = n; i > 0; i--) {
        result *= i;
    }
    return result;
};

const findFactorialRecursive = (n) => {
  if (n <= 1) {
    return 1;
  }
  return n * findFactorialRecursive(n-1);
};

const testCases = [
  {
    input: 0,
    output: 1
  },
  {
    input: 1,
    output: 1
  },
  {
    input: 2,
    output: 2
  },
  {
    input: 5,
    output: 120
  },
  {
    input: 10,
    output: 3628800
  }
];

testCases.forEach(testCase => {
  assert(findFactorialIterative(testCase.input) === testCase.output);
  assert(findFactorialRecursive(testCase.input) === testCase.output);
})