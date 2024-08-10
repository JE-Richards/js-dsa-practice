function mergeSort(array) {
  if (!Array.isArray(array)) {
    throw new Error('Input must be an array');
  }

  function split(array) {
    if (array.length <= 1) {
      return array;
    }

    const mid = Math.floor(array.length / 2);
    const left = array.slice(0, mid);
    const right = array.slice(mid);

    return [left, right];
  }

  // assumes that the input arrays are pre-sorted, which they should be if recursively split first
  function merge(leftArray, rightArray) {
    let mergedArray = [];
    let i = 0;
    let j = 0;

    while (i < leftArray.length && j < rightArray.length) {
      if (leftArray[i] < rightArray[j]) {
        mergedArray.push(leftArray[i]);
        i += 1;
      } else {
        mergedArray.push(rightArray[j]);
        j += 1;
      }
    }

    // append remaining elements;
    if (i < leftArray.length) {
      mergedArray = mergedArray.concat(leftArray.slice(i));
    }

    if (j < rightArray.length) {
      mergedArray = mergedArray.concat(rightArray.slice(j));
    }

    return mergedArray;
  }

  // base case
  if (array.length === 0 || array.length === 1) {
    return array;
  }

  // recursive logic
  let [leftArray, rightArray] = split(array);
  let leftSorted = mergeSort(leftArray);
  let rightSorted = mergeSort(rightArray);

  return merge(leftSorted, rightSorted);
}
