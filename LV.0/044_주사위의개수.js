function solution(box, n) {
  let answer = 1;
  for (let i in box) {
    answer *= Math.floor(box[i] / n);
  }
  return answer;
}
