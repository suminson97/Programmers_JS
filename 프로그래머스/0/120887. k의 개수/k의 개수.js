function solution(i, j, k) {
    let answer = 0;
    let str = ""
    for (let z=i; z<j+1; z++){
        str+=z
    }
    for (let z=0; z<str.length; z++){
        if(str[z] === `${k}`){
            answer+=1
        }
    }
    console.log()
    return answer;
}