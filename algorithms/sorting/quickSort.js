const swap = (arr, index1, index2) => {
    const tmp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = tmp;
}

const quickSort = (arr) => {
 return _quickSort(arr, 0, arr.length - 1);
}

const _quickSort = (arr, left, right) => {
  let pivot;
  let partitionIndex;

  if(left < right) {
    pivot = right;
    partitionIndex = partition(arr, pivot, left, right);

    _quickSort(arr, left, partitionIndex - 1);
    _quickSort(arr, partitionIndex + 1, right);
  }
  return arr;
}
   
const partition = (arr, pivot, left, right) => {
  let pivotValue = arr[pivot];
  let partitionIndex = left;

  for(let i = left; i < right; i++) {
    if(arr[i] < pivotValue) {
      swap(arr, i, partitionIndex);
      partitionIndex++;
    }
  }

  swap(arr, right, partitionIndex);
  return partitionIndex;
}

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
console.log(quickSort(numbers));