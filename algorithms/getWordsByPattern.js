const assert = require('assert');

/*
Input: words = [ "abc", "deq", "mee", "aqq", "dkd", "ccc" ],
pattern = "abb"
Output: ["mee","aqq"]
Explanation: "mee" matches the pattern because there is a permutation {a -> m, b -> e, ...}. 
"ccc" does not match the pattern because {a -> c, b -> c, ...} is not a permutation,
since a and b map to the same letter.
*/
const getWordsByPattern = (words, pattern) => {
  const patternAsObject = buildPatternObj(pattern); // O(m), m = pattern length
  return words.filter(word => validatePattern(word, patternAsObject)); // O(nK), n = words length, k = word length
};

/**
* Based on the given pattern, returns an object,
* representing the pattern by arrays of indexes with expected same value.
* For example: pattern: aabcb, output: { [0, 1], [2, 4], [3] }
* @param {string} pattern 
*/
const buildPatternObj = (pattern) => {
  const lettersIndexes = {};
  [...pattern].forEach((patternChar, index) => {
    if (lettersIndexes[patternChar]) {
      lettersIndexes[patternChar].push(index);
    } else {
      lettersIndexes[patternChar] = [index];
    }
  });

  return Object.values(lettersIndexes);
};

const validatePattern = (word, patternAsObject) => {
  for (indexesArray of patternAsObject) {
    const firstIndex = indexesArray[0];
    const expectedChar = word[firstIndex];
    if (indexesArray.some(index => word[index] !== expectedChar)) {
      return false;
    }
  }

  // Validate the 'ccc' with 'abb' pattern case:
  const chars = patternAsObject.map(indexesArray => indexesArray[0]).map(index => word[index]);
  return (new Set(chars)).size === chars.length;
}

const testCases = [
  {
    words: [ "abc", "deq", "mee", "aqq", "dkd", "ccc" ],
    pattern: "abb",
    output: ["mee","aqq"]
  }
];

testCases.forEach(testCase => {
  assert(JSON.stringify(getWordsByPattern(testCase.words, testCase.pattern)) === JSON.stringify(testCase.output));
});
