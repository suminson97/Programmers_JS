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

    