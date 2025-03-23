function solution(numlist, n) {
    let answer = [];
    let startIdx = 0
    let sortNumlist = n > Math.max(...numlist) ? numlist.sort((a,b)=>b-a) :numlist.sort((a,b)=>a-b)

   
    for (let i=1; i<sortNumlist.length-1; i++){
        if(sortNumlist[i-1]< n && n <sortNumlist[i+1]){
            
            startIdx = i
        }
    }
    
        let i = 0;
        let j = 0
        if(sortNumlist[startIdx]===n){
            answer.push(n)
            i = startIdx-1;
            j = startIdx+1;
            
            } else {
              i = startIdx-1;
              j = startIdx;
            }
    
        
    
        while (i>=0  || j <sortNumlist.length) {
            if(i<0){
                answer.push(sortNumlist[j])
                j++
            } else if (j>=sortNumlist.length){
                answer.push(sortNumlist[i])
                i--
            } else if(n-sortNumlist[i] < Math.abs(n-sortNumlist[j])){
                answer.push(sortNumlist[i]);
                i--
                
            } else {
                answer.push(sortNumlist[j]);
                j++
            }
            
            
        }
  
  
    return answer;
}


