function solution(babbling) {
    let words = ['ye','ma','woo','aya']
    let answer = 0;
    
    for (let i = 0 ; i<babbling.length; i++){
        if(babbling[i].length<2){
            continue;
        }
        let idx = 0
        for(let j = 2; j<=babbling[i].length; j++){
        if(j-idx<2){
           
            continue;
        }
        let slicedStr = babbling[i].slice(idx,j)
        
        if(words.includes(slicedStr)){
            idx=j
            if(slicedStr===babbling[i].slice(j,j+slicedStr.length)){
            idx=0
            }
        
            
        }
            
        }
        if(idx ===babbling[i].length ){
            answer++
        }
        
        
        
    }
    return answer;
}

