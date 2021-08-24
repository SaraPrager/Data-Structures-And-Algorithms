const assert = require('assert');

// O(n)
const fibonacciIterative = (n) => {
    if (n < 0) {
        throw(new Error(`Invalid argument: ${n}`));
    }

    if ([0,1].includes(n)) {
        return n;
    }

    let first = 0, second = 1;
    let index = 2, result;

    while(index <= n) {
        result = first + second;
        first = second;
        second = result;
        index++;
    }

    return result;
};

// O(2^n)
const fibonacciRecursive = (n) => {
    if (n < 2) {
        return n;
    }

    return fibonacciRecursive(n-1) + fibonacciRecursive(n - 2);
};

// O(n)
const memFibonacciRecursive = (n) => {
  const cache = {};
  const fibonacci = (n) => {
    if (cache[n] === undefined) {
      if (n < 2) {
        cache[n] = n;
      } else {
        cache[n] = fibonacci(n-1) + fibonacci(n - 2);
      }
    }
    return cache[n];
  }
  
  return fibonacci;
};

// O(n)
const bottomUpFibonacci = (n) => {
  const results = [0, 1];
  for (let i = 2; i <= n; i++) {
    results[i] = results[i-1] + results[i-2];
  }

  return results[n];
};

const testCases = [
  {
    input: 0,
    output: 0
  },
  {
    input: 1,
    output: 1
  },
  {
    input: 2,
    output: 1
  },
  {
    input: 6,
    output: 8
  },
  {
    input: 12,
    output: 144
  }
];

testCases.forEach(testCase => {
  assert(fibonacciIterative(testCase.input) === testCase.output);
  assert(fibonacciRecursive(testCase.input) === testCase.output);
  assert(memFibonacciRecursive()(testCase.input) === testCase.output);
  assert(bottomUpFibonacci(testCase.input) === testCase.output);
})