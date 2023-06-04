function solution(age) {
  var answer = "";
  let str = age.toString();
  let arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
  for (let i = 0; i < str.length; i++) {
    answer += arr[str[i]];
  }
  return answer;
}
