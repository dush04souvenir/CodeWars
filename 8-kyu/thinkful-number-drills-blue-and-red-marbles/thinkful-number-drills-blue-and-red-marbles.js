function guessBlue(blueStart, redStart, bluePulled, redPulled) {
  // Your code here.
   const blueLeft =  blueStart - bluePulled;
  const redLeft = redStart - redPulled;
  const totolLeft = blueLeft + redLeft;
  return blueLeft / totolLeft;
}