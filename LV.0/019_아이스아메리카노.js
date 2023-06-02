function solution(money) {
  let num = Math.floor(money / 5500);
  let change = money % 5500;
  var answer = [num, change];
  return answer;
}
