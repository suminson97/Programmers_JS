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
  
  
    console.log(sortNumlist,answer)
    return answer;
}

// 1.numlist를 정렬후 n의 위치를 찾는다 위치를 찾는 법은 i-1 <n<i+1 인곳을 찾는다  
// 2.그 지점을 startIdx로 지정해서 오른쪽 순회 왼쪽 순회를 돈다.
// ex) [1,2,3,5,6] 이고 n 이 4라면 startIdx는 3이 될것이고 첫 비교는 sortNumlist[startIdx-1] 과 sortNumlist[startIdx]

