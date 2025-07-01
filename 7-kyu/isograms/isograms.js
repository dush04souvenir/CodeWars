function isIsogram(str) {
  const lowerStr = str.toLowerCase();
  const uniqueLetters = new Set(lowerStr);
  return uniqueLetters.size === lowerStr.length;
}
​