function solve(stones) {
  let colors = 0;
  for(let i =0; i<stones.length;i++){
      if(stones[i] == stones[i+1]){
          colors++;
      }
  }
  return colors;
   
}
solve("RGBRGGGBRGBBB");