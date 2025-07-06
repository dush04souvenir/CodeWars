​
function bubblesortOnce(arr) {
  let result = arr.slice(); // Copy to avoid changing original array
​
  // Outer loop - Only one pass needed
  for (let pass = 0; pass < 1; pass++) {  
    // Inner loop - Perform comparisons and swaps for one pass
    for (let i = 0; i < result.length - 1; i++) {
      if (result[i] > result[i + 1]) {
        // Swap using a temporary variable (beginner-friendly swap)
        let temp = result[i];
        result[i] = result[i + 1];
        result[i + 1] = temp;
      }
    }
  }
​
  return result;
}
​