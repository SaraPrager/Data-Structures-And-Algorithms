// https://www.algoexpert.io/questions/Validate%20Subsequence

const assert = require('assert');

const isValidSubsequence = (sequence, subsequence) => {
  let indexInSequence = 0;
  let indexInSubsequence = 0;
  while (indexInSequence < sequence.length && indexInSubsequence < subsequence.length) {
    if (sequence[indexInSequence] === subsequence[indexInSubsequence]) {
      indexInSubsequence++;
    }
    indexInSequence++;
  }

  return indexInSubsequence === subsequence.length;
};

const testCases = [
  {
    sequence: [5, 1, 22, 25, 6, -1, 8, 10],
    subsequence: [1, 6, -1, 10],
    result: true
  },
  {
    sequence: [5, 1, 22, 25, 6, -1, 8, 10],
    subsequence: [5, 1, 22, 25, 6, -1, 8, 10],
    result: true
  },
  {
    sequence: [5, 1, 22, 25, 6, -1, 8, 10],
    subsequence: [1, 6, 10],
    result: true
  },
  {
    sequence: [5, 1, 22, 25, 6, -1, 8, 10],
    subsequence: [25],
    result: true
  },
  {
    sequence: [5, 1, 22, 25, 6, -1, 8, 10],
    subsequence: [5, 1, 22, 25, 6, -1, 8, 10, 12],
    result: false
  },
  {
    sequence: [5, 1, 22, 25, 6, -1, 8, 10],
    subsequence: [4, 5, 1, 22, 25, 6, -1, 8, 10],
    result: false
  },
  {
    sequence: [5, 1, 22, 25, 6, -1, 8, 10],
    subsequence: [5, 1, 22, 23, 6, -1, 8, 10],
    result: false
  }
];

testCases.forEach(testCase => {
  assert(isValidSubsequence(testCase.sequence, testCase.subsequence) === testCase.result);
});