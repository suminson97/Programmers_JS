function solution(num_list, n) {
    let answer = [];
   
    for (let i=0; i<num_list.length-(n-1); i+=n){
        answer.push(num_list.slice(i,i+n))
      } 
     
    
    
    return answer;
}








// 1.num_list 원소들을 "앞에서부터" n개씩나눠2차원 배열로 변경하는것이 핵심 
//  안되는것: n개씩 2차원배열로 어떻게 넣을것인가 
//  시도해본것 :
// answer 배열을 new Array를 활용해 n개의 이차원빈배열로 만들었다.
// =>배열의 위치를 지정해 대입할수있는 방법이 없다. 
//     위치를 찾기힘들다면 slice를 활용하는것은?
// for문으로 i가  n만큼 늘어나게 하고 
// answer에 num_list[i],num_list[i+n-1]만큼 slice한 배열을 집어 넣는다
