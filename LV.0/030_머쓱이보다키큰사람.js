function solution(array, height) {
  return array.filter((v, i) => v > height).length;
}
