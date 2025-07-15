function sumMul(n, m) {
  // Check for invalid inputs
  if (n <= 0 || m <= 0) {
    return "INVALID";
  }
​
  let sum = 0;
​
  // Sum all multiples of n below m
  for (let i = n; i < m; i += n) {
    sum += i;
  }
​
  return sum;
}
​