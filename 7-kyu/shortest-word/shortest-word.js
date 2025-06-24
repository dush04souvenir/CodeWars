function findShort(s){
  const str = s.split(' ');
  const length = str.map(word => word.length);
  return Math.min(...length);
  
}