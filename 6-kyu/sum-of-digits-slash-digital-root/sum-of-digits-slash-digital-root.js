function digitalRoot(n) {
  // ...
  let nstring = n.toString().split("").map(Number);
  
  let sum = nstring.reduce((a, b) => a + b, 0);
  
  if(sum < 10){
    return sum;
  }
  return digitalRoot(sum);
}