function duplicateCount(text){

    let result = 0;
    let numberOfDuplicate = 0;
    let texta = text.toLowerCase();
    let uniqueText = new Set(texta);
    let newArr = [...uniqueText];
    for(let i = 0; i< newArr.length; i++ ){
      let index = newArr[i];
      for(let j = 0; j < texta.length; j++){
        if(texta[j] == index){
           numberOfDuplicate++;
        }
      }
      if(numberOfDuplicate > 1){
        
        result++;
      }
      numberOfDuplicate = 0;
       
    }
     return result;
  }
​//
