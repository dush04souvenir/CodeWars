function alphabetPosition(text) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let result = [];
  
  for(let char of text.toLowerCase()){
    if(alphabet.includes(char)){
      result.push(alphabet.indexOf(char)+ 1)
    }
   
  }
   return result.join(" ")
}