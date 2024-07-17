const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let answer = "";
let inputMap = new Map();
for (let i = 1; i < input.length; i++) {
  let inputString = input[i].toString().trim().split(" ");
  inputMap.set(
    inputString[0],
    inputMap.get(inputString[0])
      ? +inputMap.get(inputString[0]) + +inputString[1]
      : +inputString[1]
  );
}
for (v of inputMap.values()) {
  if (v === 5) {
    answer = "YES";
    break;
  } else answer = "NO";
}
console.log(answer);
