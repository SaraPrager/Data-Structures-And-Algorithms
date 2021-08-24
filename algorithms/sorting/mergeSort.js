const mergeSort = (arr) => {
    if (arr.length === 1) {
      return arr;
    }
  
    const middle = Math.floor(arr.length / 2);
  
    const left = [];
    for (let i = 0; i < middle; i++) {
      left.push(arr[i]);
    }

    const right = [];
    for (let i = middle; i < arr.length; i++) {
      right.push(arr[i]);
    }
  
    return merge(mergeSort(left), mergeSort(right));
}
  
const merge = (left, right) => {
    const result = [];
    while (left.length > 0 && right.length > 0) {
      if (left[0] <= right[0]) {
        result.push(left[0]);
        left.shift();
      } else {
        result.push(right[0]);
        right.shift();
      }
    }

    if (left.length > 0) {
      result.push(...left);
    } else if (right.length > 0) {
      result.push(...right);
    }
    return result;
}
  
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
console.log(mergeSort(numbers));