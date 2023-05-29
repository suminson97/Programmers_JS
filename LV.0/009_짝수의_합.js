function solution(n) {
  let answer = Array(n)
    .fill(1)
    .map((v, i) => v + i)
    .filter((v) => v % 2 === 0)
    .reduce((a, c) => a + c, 0);
  return answer;
}
