 
function narcissistic(value) {
  // Code me to return true or false
  let valueArray = value.toString().split("");
  let power = valueArray.length;
  let sum = valueArray.reduce((acc, digit) => acc + Math.pow(Number(digit),power),0);
  return value === sum;
}
​