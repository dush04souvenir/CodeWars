function openOrSenior(data){
  // ...
   return data.map(([age, handcaped]) =>
        {return age >= 55 && handcaped > 7 ? 'Senior' : 'Open'
                  });
}