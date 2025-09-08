function narcissistic(value) {
  // Code me to return true or false
  let arrayValue = value.toString().split("");
  let power = arrayValue.length;
  let sum = arrayValue.reduce( (acc,digit) => acc + Math.pow(Number(digit), power), 0);
    return sum === value;
  }
​
​