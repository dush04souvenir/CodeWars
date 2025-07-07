function bubble(l) {
  const snapshots = [];           // To store snapshots after swaps
  const arr = l.slice();          // Make a copy to avoid mutating input
​
  for (let i = 0; i < arr.length - 1; i++) {
    let swapped = false;          // Flag to check if any swap happens
​
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;           // Mark as swapped
        snapshots.push(arr.slice());  // Take snapshot after swap
      }
    }
​
    if (!swapped) break;          // If no swap, array is sorted
  }
​
  return snapshots;
}
​