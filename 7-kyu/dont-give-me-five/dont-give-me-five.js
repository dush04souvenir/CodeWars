function dontGiveMeFive(start, end)
{
  let result = [];
  for(let i= start; i <= end; i++){
      result.push(i)
    }
   return result.filter(num => !num.toString().includes(5)).length;
  }
​