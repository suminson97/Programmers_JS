function solution(quiz) {
    let answer = [];
    for (let i= 0; i<quiz.length; i++){
        let quizEl = quiz[i].split(" ")
        let ans = +quizEl[quizEl.length-1]-(+quizEl[0])
        if(quizEl[1]==="+"){
            ans= ans-(+quizEl[2])
        } else ans= ans+(+quizEl[2]) 
        if(ans){
            answer.push("X")
        }else answer.push("O")
    }
    console.log(answer)
    return answer;
}