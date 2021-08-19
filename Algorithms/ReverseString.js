const reverseString = (str) => {
    const newArr = [];
    for (let i=0; i< str.length; i++) {
      newArr[str.length-i] = str[i];
    }
    return newArr.join('');
}
  
const modernReverseString = (str) => [...str].reverse().join('');