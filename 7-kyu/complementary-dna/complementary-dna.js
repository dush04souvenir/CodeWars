function dnaStrand(dna){
   return dna.split('').map(base => {
    switch(base) {
      case 'A': return 'T';
      case 'T': return 'A';
      case 'C': return 'G';
      case 'G': return 'C';
    }
  }).join('');
}