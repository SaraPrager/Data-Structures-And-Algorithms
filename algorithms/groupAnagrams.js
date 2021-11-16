// https://leetcode.com/problems/group-anagrams/

// Solution #1: O(m*nlogn)
const groupAnagramsV1 = (strs) => {
  const result = {};

  strs.forEach(str => {
      const key = [...str].sort().join('');
      if (result[key]) {
        result[key].push(str);
      } else {
        result[key] = [str];
      }
  });
  
  return Object.values(result)
};

// Solution #2: O(mn)
const LETTERS_COUNT = 26;
const FIRST_VALID_CHAR = 'a';

const groupAnagramsV2 = (strs) => {
    const result = {};

    strs.forEach(str => {
        const key = buildKey(str);
        if (result[key]) {
          result[key].push(str);
        } else {
          result[key] = [str];
        }
    });
    
    return Object.values(result)
};

const buildKey = (str) => {
  const lettersCount = new Array(LETTERS_COUNT).fill(0);

  [...str]
  .forEach(strChar => {
      const charCode = strChar.charCodeAt(0) - FIRST_VALID_CHAR.charCodeAt(0);
      lettersCount[charCode]++
  });

  return lettersCount;
};