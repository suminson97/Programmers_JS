function solution(common) {
     let answer = 0;
    if(common[0]+common[common.length-1] === common[1]+common[common.length-2]){
    answer = common[common.length-1]+common[common.length-1]-common[common.length-2]
    }else {
    answer =common[common.length-1]*(common[common.length-1]/common[common.length-2])
    }
    return answer;
}