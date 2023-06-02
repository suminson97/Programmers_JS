function solution(numbers) {
  let arr = numbers.sort((a, b) => b - a);
  let answer = arr[0] * arr[1];
  return answer;
}
