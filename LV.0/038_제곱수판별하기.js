function solution(n) {
  return n % n ** (1 / 2) === 0 ? 1 : 2;
}
