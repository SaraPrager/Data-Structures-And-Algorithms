const assert = require('assert');

const findRecurringChar = (str) => {
  if (!str || typeof str !== 'string') {
    return undefined;
  }

  const map = {};
  for (let i = 0; i < str.length; i++) {
    const currentChar = str[i];
    if (map[currentChar]) {
      return currentChar;
    }

    map[currentChar] = true;
  }

  return undefined;
};

const testCases = [
  {
    input: '1234561',
    result: '1'
  },
  {
    input: '22',
    result: '2'
  },
  {
    input: '12435765',
    result: '5'
  },
  {
    input: '808',
    result: '8'
  },
  {
    input: '99',
    result: '9'
  },
  {
    input: '123',
    result: undefined
  },
  {
    input: undefined,
    result: undefined
  },
  {
    input: '',
    result: undefined
  },
  {
    input: () => { console.log('hey!') },
    result: undefined
  }
];

testCases.forEach(testCase => {
  assert(findRecurringChar(testCase.input) === testCase.result);
})