// O(n)
const move = (arr, fromIndex, toIndex) => {
    const valToMove = arr[fromIndex];

    for (let i = fromIndex; i > toIndex; i--) {
      arr[i] = arr[i-1];
    }

    arr[toIndex] = valToMove;
}
  
// O(n)
const findCorrectIndex = (arr, toIndex) => {
    for (let i = 0; i < toIndex; i++) {
        if (arr[i] > arr[toIndex]) {
            return i;
        }
    }
    return undefined;
}

// O(n^2)
const insertionSort = (arr) => {
    if (!arr) {
        return undefined;
    }

    for (let i = 1; i < arr.length; i++) { // O(n)
        const newIndex = findCorrectIndex(arr, i); // O(n)
        if (newIndex !== undefined) {
            move(arr, i, newIndex); // O(n)
        }
    }
}
  
let numbers = [78, 98, 1, 2, 56, 87, 0, 23, 14, 76, 9, 0, 3];
insertionSort(numbers)
console.log(numbers);