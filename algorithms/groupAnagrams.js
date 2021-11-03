// https://leetcode.com/problems/group-anagrams/

const groupAnagrams = (strs) => {
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