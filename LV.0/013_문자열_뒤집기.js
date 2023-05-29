function solution(my_string) {
  let result = "";
  for (const i of my_string) {
    result = i + result;
  }
  return result;
}
