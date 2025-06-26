function findNextSquare(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise
  const result = Math.sqrt(sq);
  if(Number.isInteger(result)){
    let next = result + 1;
    return next * next;
  }
  else{
    return -1;
  }
  }
  