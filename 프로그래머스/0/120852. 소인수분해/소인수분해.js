function solution(n) {
    let answer = new Set();
    let num = 2
    while(n>=2){
        if(n%num===0){    
        answer.add(num)
        n= n/num
        }else num++
    }
      
       
    return [...answer];
}
