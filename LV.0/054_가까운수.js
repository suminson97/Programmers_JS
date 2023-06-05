function solution(array, n) {
  const diff = [];
  array.sort((a, b) => a - b);
  array.forEach((a) => {
    diff.push(Math.abs(n - a));
  });

  return array[diff.indexOf(Math.min(...diff))];
}
