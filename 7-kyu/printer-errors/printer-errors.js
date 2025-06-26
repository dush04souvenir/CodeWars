function printerError(s) {
  // Match all characters not between 'a' and 'm'
  const errors = s.match(/[^a-m]/g);
  const errorCount = errors ? errors.length : 0;
  return `${errorCount}/${s.length}`;
}
​