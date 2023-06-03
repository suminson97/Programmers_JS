function solution(sides) {
  let arr = sides.sort((a, b) => a - b);
  let answer = arr[2] < arr[0] + arr[1] ? 1 : 2;
  return answer;
}
