function spinWords(string){
  let array = string.split(" ");
  return array.map( a => (a.length >= 5) ? a.split("").reverse().join("") : a).join(" ");
}