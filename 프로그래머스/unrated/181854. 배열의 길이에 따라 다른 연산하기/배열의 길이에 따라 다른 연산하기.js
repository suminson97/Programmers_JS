function solution(arr, n) {
    for(let i = 0; i<arr.length;i++){
            if(arr.length%2==1 && i%2==0){
                arr[i]+=n;
            }
            if(arr.length%2==0 && i%2==1){
                arr[i]+=n;
            }
        }
    
   return arr
}