function solution(clothes) {
    var answer = 1;
    const map= new Map();
    for (v of clothes) {
        if (!map.has(v[1])) {
            map.set(v[1],[v[0]])                 
        } else {
            map.get(v[1]).push(v[1])
        }
    }
    for(v of map.values()){
      answer *= v.length +1
    }
    return answer -1;
}



