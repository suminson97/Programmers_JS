const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const inputLine = input.map((v) => v.trim());
const [n, k, ...cardNum] = inputLine;
const numBag = [];
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (+k === 2) {
      if (i === j) {
        continue;
      }
      numBag.push(cardNum[i] + cardNum[j]);
      continue;
    }
    for (let o = 0; o < n; o++) {
      if (+k === 3) {
        if (i === j || i === o || j === o) {
          continue;
        }
        numBag.push(cardNum[i] + cardNum[j] + cardNum[o]);
        continue;
      }
      for (let z = 0; z < n; z++) {
        if (i === j || i === o || i === z || j === o || j === z || o === z) {
          continue;
        }
        numBag.push(cardNum[i] + cardNum[j] + cardNum[o] + cardNum[z]);
      }
    }
  }
}
const newNumBag = numBag.filter((v, i) => {
  return numBag.indexOf(v) === i;
});
console.log(newNumBag.length);