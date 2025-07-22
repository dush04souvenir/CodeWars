function findOdd(A) {
 
     //best practice 
    const findOdd = (xs) => xs.reduce((a, b) => a ^ b);
   //happy coding!
  let uniqueA = new Set(A);
  let uniqueArray = [...uniqueA]
  for(let i = 0; i < uniqueArray.length; i++){
      let element = uniqueArray[i];
      let numberOfRepeats = 0;
      for(b of A){
        
          let current = b;
          if(element == current){
              numberOfRepeats++;
              
          }
          
        
      }
    if(numberOfRepeats % 2 !== 0){
                  return element;
              }
     
  }
}
