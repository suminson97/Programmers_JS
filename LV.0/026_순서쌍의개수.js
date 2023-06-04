function solution(n) {
  let i = 1;
  let count = 0;
  while (i <= n) {
    if (n % i === 0) {
      count += 1;
    }
    i += 1;
  }
  return count;
}
