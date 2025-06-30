function getSum(a, b)
{
  let sum = 0;
  const start = Math.min(a,b);
  const end = Math.max(a,b);
  for(let i =start; i <=end; i++){
    sum +=i;
  }
   return sum;
}
//best practice solution 
function getSum(a, b) {
  const min = Math.min(a, b);
  const max = Math.max(a, b);
  return ((max - min + 1) * (min + max)) / 2;
}
