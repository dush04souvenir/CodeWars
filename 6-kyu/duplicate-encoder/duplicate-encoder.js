function duplicateEncode(word){
    // ...
  let worder = word.toUpperCase();
  let newWord = [];
 
    for( let i = 0; i < word.length; i++){
          let exist = false;
      for(let j = 0; j < word.length; j++){
        if(i !== j && worder[i] == worder[j]){
           exist = true;
           break;
        }
      }
      if(exist){
        newWord.push(")")
      }
      else{
        newWord.push("(")
      }
    }
   return newWord.join("");
}
​