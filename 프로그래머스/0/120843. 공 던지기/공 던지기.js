function solution(numbers, k) {
    let num = 0;
    let answer =0
   while (k){
      answer= numbers[num]
       num+=2
       if(num>numbers.length){
           num=num-numbers.length
       }
       k--
   }
    console.log(numbers.length)
    return answer;
}