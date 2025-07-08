function hello(name = 'world') {
  if(name === ''){
    return "Hello, World!";
  }
  const nameptn = name.slice(0,1).toUpperCase() + name.slice(1).toLowerCase();
  return `Hello, ${nameptn}!`;
}