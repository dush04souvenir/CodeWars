function getSum(a, b){
   const max = Math.max(a,b);
   const min = Math.min(a,b);
​
  if( a === b){
      return a;
      
  }
  else{
    let sum = 0;
    for(let i = min; i <= max; i ++){
      sum += i;
    }
    return sum;
  }
}
console.log(getSum(-1,5));