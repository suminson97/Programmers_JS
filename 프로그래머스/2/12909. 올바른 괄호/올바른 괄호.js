function solution(s){
    let answer = true;
    let stack = 0
     for (let i=0; i< s.length; i++){
        if(s[i]==="("){
        stack+=1    
        }
         if(s[i]===")"){
             if(stack===0){
                 answer=false
             }
             stack-=1
         }
     }
    if(stack>0){
        answer=false
    }

    return answer;
}


    