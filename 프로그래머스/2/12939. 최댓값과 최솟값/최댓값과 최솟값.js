function solution(s) {
    let answer = '';
    let arr =s.split(" ");
    let max = arr[0];
    let min = arr[0];


    for(let i= 1; i <arr.length; i++){
        if(parseInt(arr[i])>parseInt(max)) {
        max = arr[i]
        } else if (parseInt(arr[i])<parseInt(min)){
            min = arr[i]
        } else {
            continue
        }
      
    }
    
  
       answer=`${min} ${max}`
    
    return answer;
}