function solution(m, n, board) {   
    let answer = 0;
    let splitBoard = board.map((v)=>v.split(""))
    const set = new Set();
    let isTrue = true;
        while(true){
             answer+=findBlock(m,n,splitBoard,set); 
            if(set.size===0) break;
             removeBlock(set,splitBoard)
             moveBlock(m, n,splitBoard)
        }
      
   
    
    
    return answer;
}

function findBlock(m,n,splitBoard,set) {
    for (let i = 0; i< m-1; i++){
        for (let j = 0; j<n-1; j++){
            let ch = splitBoard[i][j];
            if(!ch) continue;
            if(ch===splitBoard[i][j+1]&&
                ch===splitBoard[i+1][j]&&
                   ch===splitBoard[i+1][j+1]){
                set.add(`${i},${j}`)
                set.add(`${i},${j+1}`)
                set.add(`${i+1},${j}`)
                set.add(`${i+1},${j+1}`)
               
            }
        }
    }
 
    return set.size
   
}

function removeBlock(set,splitBoard) {
    for (let v of set){
        
        let  i= +v.split(",")[0]
        let j = +v.split(",")[1]
     
    splitBoard[i][j]=0;
        set.delete(v)
       
       
    }
}

function moveBlock(m, n,splitBoard) {

    for (let i=0; i < n; i++){
        let stack = [];
        for (let j = 0; j<m; j++){
            
        if(splitBoard[j][i]){
            stack.push(splitBoard[j][i])
                }
            }
        for (let k = m-1; k>=0; k--){
        splitBoard[k][i]=stack.pop()??0;
           
        }
    }
}
// 1.2중for문 즉 전체 순회를 하면서 2x2블록이 있는지 while문으로 확인 
// 2. if(a===1&&b===-1) 코드를 통해 2x2블록이 존재할시 0으로 채워진 arr에 해당위치 1 삽입
// 3.
// 그래야 다음순회시 발견되는 2X2 가 전 2X2와 겹치는 부분이있는지 찾을수있기 떄문
// mXn의 배열을 만들어 놓은후 0으로 채워 놓는다 
// 발견된 2X2블록을 1로 만든다 ? 어떻게?
    