const reverseString = (str) => {
    const newArr = [];
    for (let i = 0; i < str.length; i++) {
      newArr[str.length-i] = str[i];
    }
    return newArr.join('');
};

const reverseStringRecursive = (str) => {
  if (typeof str !== 'string') {
    throw(new Error(`Invalid argument ${str}`));
  }

  if (str.length === 0) {
    return "";
  }

  return reverseStringRecursive(str.substr(1)) + str[0];
};

const modernReverseString = (str) => [...str].reverse().join('');
