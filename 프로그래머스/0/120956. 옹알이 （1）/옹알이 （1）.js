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
        }
            
        }
        if(idx ===babbling[i].length ){
            answer++
        }
        
        
        
    }
    return answer;
}
// 2words => ['ye','ma']
// 3words => ['woo','aya']
// babbling을 순회하며 [i]요소가 1글자면 pass , 2글자면 2words 일치하는지 확인
// 3글자이상이면 순서대로 2글자 자른후  일치하는지 확인, 3글자 자른후 3words 일치하는지 확인 
// 만약 2글자가 2words에 포함되는데 뒤에 글자가 한글자다 ? pass
