function solution(array) {
    let stringA = array.join("");
    let answer = 0;
   for (let i=0; i<stringA.length; i++){
       if(stringA[i]==="7"){
           answer++
          
       }
   }
    return answer;
}