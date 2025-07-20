function countBits(n) {
  // Program Me
    let num = n.toString(2);
    let result = num.split("").filter(i => i == 1);
    return result.length;
}