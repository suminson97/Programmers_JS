function solution(my_string, num1, num2) {
  let str = my_string.split("");
  let str1 = my_string[num1];
  let str2 = my_string[num2];
  str[num1] = str2;
  str[num2] = str1;

  return str.join("");
}
