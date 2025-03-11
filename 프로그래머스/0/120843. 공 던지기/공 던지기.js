
2
3
4
5
function solution(numbers, k) {

    return numbers[((2 * (k -1))) % numbers.length];
}