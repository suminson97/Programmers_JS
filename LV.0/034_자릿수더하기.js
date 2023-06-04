function solution(n) {
  let string = n.toString();
  let answer = 0;
  for (let i = 0; i < string.length; i++) {
    answer += string[i] * 1;
  }
  return answer;
}
