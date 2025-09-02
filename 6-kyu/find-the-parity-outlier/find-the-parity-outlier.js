function findOutlier(integers){
  //your code here
  let Odd = integers.filter( n => n % 2 !== 0);
  let even = integers.filter(n => n % 2 === 0);
  if(Odd.length === 1){
      return Odd[0]
  }
  return even[0]
  
}