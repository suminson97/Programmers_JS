function solution(num_list) {
  var answer = [];

  let a = 0;
  let b = 0;
  num_list.forEach((v) => {
    if (v % 2 === 0) {
      a += 1;
    } else {
      b += 1;
    }
  });

  return [a, b];
}
