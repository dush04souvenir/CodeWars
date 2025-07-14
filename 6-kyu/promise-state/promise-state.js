async function getState(promise) {
  const uniqueSymbol = Symbol('pending');
​
  return await Promise.race([
    promise.then(() => 'fulfilled', () => 'rejected'),
    new Promise(resolve => setTimeout(() => resolve(uniqueSymbol), 0))
  ]) === uniqueSymbol ? 'pending' : await promise.then(() => 'fulfilled', () => 'rejected');
}
​