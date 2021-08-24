const swap = (arr, index1, index2) => {
    const tmp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = tmp;
}

// O(n^2)
const selectionSort = (arr) => {
    if (!arr) {
      return undefined;
    }
  
    for (let i = 0; i < arr.length; i++) {
      let minValIndex = i;
      for (let j = i+1; j < arr.length; j++) {
        if (arr[j] < arr[minValIndex]) {
          minValIndex = j;
        }
      }
  
      if (minValIndex !== i) {
        swap(arr, i, minValIndex);
      }
    }
}
  
  let numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
  selectionSort(numbers)
  console.log(numbers);