function solution(array) {
    
    let map = new Map();
    for (let i=0; i<array.length; i++){
        if(map.has(array[i])){
           map.set(array[i],map.get(array[i])+1)
        }else
        map.set(array[i],1)
    } 
     let maxFreq = 0;
    let mode = -1;
    let multiple = false;

    for (let [key, value] of map) {
        if (value > maxFreq) {
            maxFreq = value;
            mode = key;
            multiple = false;
        } else if (value === maxFreq) {
            multiple = true;
        }
    }

    return multiple ? -1 : mode;
    
}