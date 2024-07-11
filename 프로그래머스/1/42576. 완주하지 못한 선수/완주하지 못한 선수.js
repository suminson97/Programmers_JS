function solution(participant, completion) {
    const map= new Map();
    let answer = ''
    for(let i=0; i<participant.length;i++){
        map.set(participant[i],(map.get(participant[i])||0)+1)
    }
    for(v of completion){
        if(map.has(v)){
            map.set(v,(map.get(v)||0)-1)
        }
    }
    for (const [key, value] of map) {
    if (value === 1) {
        answer=key
    }
}
    return answer;
}