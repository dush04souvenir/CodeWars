 
function solve(stones) {
   let colors = 0;
   let red = stones.split("").filter(char => char === "R").length;
   let green = stones.split("").filter(char => char === "G").length;
   let blue = stones.split("").filter(char => char === "B").length;
   colors = red % 2 + green % 2 + blue % 2;
  return colors;
   
}