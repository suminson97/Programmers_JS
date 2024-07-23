function solution(genres, plays) {
    const answer =[] 
    const genresCount = new Map()
    const genresMap = new Map()
    for (let i =0; i< genres.length; i++){
        genresCount.set(genres[i],(genresCount.get(genres[i])||0)+plays[i])
        if (!genresMap.has(genres[i])) {
            genresMap.set(genres[i], []);
        }
        genresMap.get(genres[i]).push([plays[i], i]);
    }
    for(v of genresMap.keys()){
        genresMap.get(v).sort((a,b)=>b[0]-a[0]|| a[1] - b[1])
    }
    const genresOrder = [...genresMap.entries()].sort((a, b) => {
        const sumA = a[1].reduce((acc, cur) => acc + cur[0], 0);
        const sumB = b[1].reduce((acc, cur) => acc + cur[0], 0);
        return sumB - sumA;
    }).map(item => item[0]);
    
    for(v of genresOrder) {
        const songIndex = genresMap.get(v).map((v)=>v[1])
    answer.push(...songIndex.slice(0,2))
    }
    return answer;
}