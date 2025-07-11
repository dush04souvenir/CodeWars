function removeSmallest(numbers) {
  if(numbers.length === 0){
    return [];
  }
  const miniIndex = numbers.indexOf(Math.min(...numbers));
  return numbers.slice(0,miniIndex).concat(numbers.slice(miniIndex + 1));
}