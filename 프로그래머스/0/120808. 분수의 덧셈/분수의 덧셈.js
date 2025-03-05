// 1.최소공배수로 통분하는방법(재귀)
function solution(numer1, denom1, numer2, denom2) {
    let answer = [];
    let 공통분모 = (denom1 * denom2) / 최대공약수구하는함수(denom1, denom2);
    let 분자합 = (numer1 * (공통분모 / denom1)) + (numer2 * (공통분모 / denom2));

    
    let 최대공약수 = 최대공약수구하는함수(분자합, 공통분모);
    분자합 /= 최대공약수;
    공통분모 /= 최대공약수;

    answer.push(분자합, 공통분모);
    
    function 최대공약수구하는함수(a, b) {
        return b ? 최대공약수구하는함수(b, a % b) : a;
    }

    return answer;
}



// 2.최대 공약수로 약분하는 방법(while)
// function solution(numer1, denom1, numer2, denom2) {
//     let answer = [];
//     let 분자합= numer1*denom2+numer2*denom1
//     let 분모합= denom1*denom2
//     let 최대공약수 = 최대공약수구하는함수(분자합,분모합)
    
//     answer.push(분자합/최대공약수,분모합/최대공약수)
    
    
// function 최대공약수구하는함수(a,b){
//     let c = 0; 
    
//      while(b !== 0){ 
//         c = a % b; 
//         a = b; 
//         b = c; 
//         } 
    
//     return a
// }
//     return answer;
// }


