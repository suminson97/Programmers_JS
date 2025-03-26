function solution(num, total) {
    
    let answer = [];
    if(num%2===1){
        let a =Math.floor(total/num)
        let b =Math.floor(num/2)
        for(let i=a-b; i<a+b+1; i++){
            answer.push(i)
        }

    }else {
        let a =Math.floor(total/num) 
        let b=Math.floor(num/2)
        for(let i=a-b+1; i<a+b+1; i++){
            answer.push(i)
        }
    }
    
    return answer;
}