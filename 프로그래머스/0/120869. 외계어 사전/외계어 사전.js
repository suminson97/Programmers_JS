function solution(spell, dic) {
    let answer = 2;
    let sortSpell = spell.sort()
    for (let i = 0; i < dic.length; i++){
        let sortDic =[...dic[i]].sort() 
        let same = 0;
        if(sortSpell.length === sortDic.length){
            for (let j=0; j<sortSpell.length; j++){
                if(sortSpell[j]===sortDic[j]){
                    same++
                } else break
                same ===sortSpell.length ? answer=1 : answer =2
            }
            console.log(same)
        }
    }
    
    return answer;
}