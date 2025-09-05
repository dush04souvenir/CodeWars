function isValidWalk(walk) {
  //insert brilliant code here
     if(walk.length !== 10) return false;
       let x = 0;
       let y = 0;
     for(let dir of walk){
       if(dir === "n" ) y++;
       if(dir === "s" ) y--;
       if(dir === "e" ) x--;
       if(dir === "w" ) x++;
       }
       return x===0 && y ===0
  }