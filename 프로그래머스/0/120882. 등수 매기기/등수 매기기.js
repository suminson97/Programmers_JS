function solution(score) {
    let answer = new Array(score.length).fill(0);
    let arr = [];
    for (let i= 0;i < score.length; i++){
        let average= (score[i][0]+score[i][1])/2
        arr.push([average,i])
        }
    let sortedMap = arr.sort((a,b)=>b[0]-a[0]);
    
    answer[sortedMap[0][1]] = 1
    for (let i = 1 ; i <sortedMap.length ; i++){
       
        if(sortedMap[i-1][0]===sortedMap[i][0]){
            answer[sortedMap[i][1]]= answer[sortedMap[i-1][1]];
        }else answer[sortedMap[i][1]]= i+1;
        
    }
    console.log(sortedMap,answer)
    return answer;
}
// 1. 학생의 영어점수와 수학점수의 평균을 구한다
// 2. 학생의 순번과 평균을 map에 key:value 형태로 담는다.
// 3. map의 평균값을  오름차순으로 sort한다
// 문제 정렬한 score배열을 원본  score의 배열의 순서대로 순위를 넣어야 한다.
// // [
//   [ 100, 5 ],==>1
//   [ 95, 3 ],>2
//   [ 95, 4 ],>3
//   [ 75, 0 ],>4
//   [ 75, 1 ],>5
//   [ 40, 2 ],>6
//   [ 20, 6 ] >7
// ]
//  [1]값이 원본 인덱스인데 이렇게 정렬을 어떻게 한담?
// 문제 : 같은 평균값일때 어떻게 할것인가?
