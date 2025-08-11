function solve(stones) {
  let stona = stones.split("");
  let colors = 0;
  for(let i =0; i<stona.length;i++){
      if(stones[i] == stones[i+1]){
          colors++;
      }
  }
  return colors;
   
}
solve("RGBRGGGBRGBBB");