function toCamelCase(str){
    let array = str.split(/[-_]/);
    return array.map((string ,value)=> {
        if(value ===0){
            return string;
        }
     return string.charAt(0).toUpperCase()+ string.slice(1)
        }).
    join("");
}
​