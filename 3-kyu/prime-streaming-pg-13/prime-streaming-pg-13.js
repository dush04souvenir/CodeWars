class Primes {
  static *stream() {
    // Yield 2 (only even prime) then iterate odd numbers only.
    yield 2;
​
    // Map: composite (odd number) -> array of prime factors that produce it.
    // For each composite n, we store primes p such that n is a (odd) multiple of p.
    const D = new Map();
​
    // start from 3 and step by 2 to examine only odd candidates
    for (let q = 3;; q += 2) {
      if (!D.has(q)) {
        // q is prime
        yield q;
        // mark q*q as composite with smallest prime factor q
        // q*q is odd (odd*odd), so OK
        D.set(q * q, [q]);
      } else {
        // q is composite — advance all primes that marked it
        const plist = D.get(q);
        D.delete(q);
        for (const p of plist) {
          // next odd multiple of p after q is q + 2*p (since we only visit odd q)
          const next = q + 2 * p;
          if (D.has(next)) D.get(next).push(p);
          else D.set(next, [p]);
        }
      }
    }
  }
}
​