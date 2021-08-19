const assert = require('assert');

// Version #1: O(a*b)
const containsCommonItem1 = function (arr1, arr2) {
  if (!arr1 || !arr1.length || !arr2 || !arr2.length) {
    return false;
  }

  for (i=0; i < arr1.length; i++) {
    for (j=0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        return true;
      }
    }
  }
  return false;
}

// Version #2: O(a+b)
const containsCommonItem = function (arr1, arr2) {
  if (!arr1 || !arr1.length || !arr2 || !arr2.length) {
    return false;
  }

  const map = {};
  arr1.forEach(item => { if (!map[item]) { map[item] = true; } })
  return (arr2.some(item => map[item]));
}

const testCases = [
  {
    arr1: [1,2,3],
    arr2: [1,2,3],
    result: true
  },
  {
    arr1: [1,5,6,7],
    arr2: [8,8,5,2],
    result: true
  },
  {
    arr1: [0,9,8,7],
    arr2: [6],
    result: false
  },
  {
    arr1: [],
    arr2: [1,2],
    result: false
  },
  {
    arr1: [3,4],
    arr2: [],
    result: false
  },
  {
    arr1: undefined,
    arr2: [4,5],
    result: false
  },
  {
    arr1: [6,7],
    arr2: undefined,
    result: false
  }
];


testCases.forEach(testCase => {
  assert(containsCommonItem(testCase.arr1, testCase.arr2) === testCase.result);
});