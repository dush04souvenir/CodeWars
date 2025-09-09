function order(words){
  if(words.trim() === "") return "";
  return  words      
              .split(" ")
              .sort((a, b) => {
               let numA = a.match(/\d/)[0];
               let numB = b.match(/\d/)[0];
               return numA - numB;
               
  })
    .join(" ");
}
​