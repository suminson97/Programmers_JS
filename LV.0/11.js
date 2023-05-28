function solution(n, k) {
  let service = parseInt(n / 10) * 2000,
    sheep = 12000 * n,
    drink = 2000 * k;

  return sheep + drink - service;
}
