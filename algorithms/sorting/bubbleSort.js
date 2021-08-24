const swap = (arr, index1, index2) => {
    const tmp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = tmp;
}

// O(n^2)
const bubbleSort = (arr) => {
    if (!arr) {
      return undefined;
    }
  
    let swapped;
    do {
      swapped = false;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i+1]) {
          swap(arr, i, i+1);
          swapped = true;
        }
      }
    } while (swapped);
}

let numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
bubbleSort(numbers)
console.log(numbers);