function solution(nums) {
    const num = nums.length /2;
    const set = new Set(nums)
    if(set.size >=num){
        
    return num;
    }else if(set.size <num){
        return set.size
    }
}