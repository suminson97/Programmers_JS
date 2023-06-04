function solution(numbers, direction) {
  if (direction === "right") {
    numbers.unshift(numbers.pop());
    console.log(numbers);
  } else numbers.push(numbers.shift());

  return numbers;
}
