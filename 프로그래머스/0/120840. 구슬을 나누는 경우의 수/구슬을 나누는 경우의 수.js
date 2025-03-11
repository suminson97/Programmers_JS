
function solution(balls, share) {
    var answer = 0;

    function factorial(n) {
        return n ? n* factorial(n-1) : 1 
    }

    return Math.round(factorial(balls)/(factorial(balls-share) *factorial(share)))
}