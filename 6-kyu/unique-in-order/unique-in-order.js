var uniqueInOrder=function(iterable){
  //your code here - remember iterable can be a string or an array
  let unique = [];
  let iterate = false;
  for(let i=0; i<iterable.length; i++){
    let current = iterable[i];
       if(current !== iterable[ i-1]){
          unique.push(current)
       }
    }
      return unique;
  }
​