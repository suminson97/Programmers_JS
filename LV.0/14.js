function solution(my_string) {
  const arr = ["a", "e", "i", "o", "u"];
  my_string = my_string
    .split("")
    .filter((v) => !arr.includes(v))
    .join("");
  return my_string;
}
