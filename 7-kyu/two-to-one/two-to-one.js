​
function longest(s1, s2) {
  // Combine both strings and convert to a Set to remove duplicates
  const combined = s1 + s2;
  const uniqueLetters = new Set(combined);
  
  // Convert Set back to array, sort alphabetically, and join into a string
    return [...uniqueLetters].sort().join('');
  }