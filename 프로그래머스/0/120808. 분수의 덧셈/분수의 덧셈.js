function solution(numer1, denom1, numer2, denom2) {
    let answer = [];
    let 분자합= numer1*denom2+numer2*denom1
    let 분모합= denom1*denom2
    let 최대공약수 = 최대공약수구하는함수(분자합,분모합)
    
    answer.push(분자합/최대공약수,분모합/최대공약수)
    
    
function 최대공약수구하는함수(a,b){
    let c = 0; 
    
     while(b !== 0){ 
        c = a % b; 
        a = b; 
        b = c; 
        } 
    
    return a
}
    return answer;
}

//  분수의 덧셈을 하는방법 
// 1.두 분모의 최소공배수를 구한후 덧셈을 하고 약분을 한다
// 2.두수의 곱하기로 분모를 맞춘후 덧셈을 하고 약분을 한다

// 1 경우: 2/4+3/4 = 5/4 
// 2 경우: 1/2+3+4 인경우 4/8+6/8 =10/8 =5/4
 // 2번의 경우로 약분을 하기 전상태까지 만들기.
