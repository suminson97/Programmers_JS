function solution(num_str) {
  var answer = num_str.split("").reduce((a, c) => a + c * 1, 0);
  return answer;
}
