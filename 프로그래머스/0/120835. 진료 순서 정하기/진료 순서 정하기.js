function solution(emergency) {
    let eArray = [];
    let a = [];
    let sortE = [...emergency].sort((a,b)=>b-a)
    
    for (let i = 0; i <sortE.length; i++){
        eArray.push([sortE[i],i+1])
    }
    
    let sortedMap = new Map(eArray);
    
    for (let v of emergency){
     a.push(sortedMap.get(v))
    }
    

    return a;
}

// 핵심 : 
// 기존의 emergency 배열의 인덱스를 넣는것이 아니라 
// 배열의 응급도를 기준으로 내림차순 sort (중요한 것은 emergency을 깊은 복사 해야 원본이 바뀌지 않는다) 한 배열의 index를 현재 emergency 배열의 자리에 넣어야 정답 

// 응급도 비교하기 

// 1.hashMap : 응급도순으로 나열한 배열을 map에 넣고, emergency배열을 순회하며 map.has()를 통해 그자리에 있는 value 즉 index를 answer에 넣어준다
