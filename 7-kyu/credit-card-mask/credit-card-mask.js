// // return masked string
// function maskify(cc) {
//   if (cc.length <= 4) return str;
//   return '#'.repeat(cc.length - 4) + cc.slice(-4);
// }
​
​
function maskify(str) {
  if (str.length <= 4) return str;
  return '#'.repeat(str.length - 4) + str.slice(-4);
}
​