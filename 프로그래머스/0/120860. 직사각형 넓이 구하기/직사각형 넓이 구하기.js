function solution(dots) {

    let firstSort= dots.sort((a,b)=>b[0]-a[0])
    let secondSort= dots.sort((a,b)=>b[1]-a[1])
    return (firstSort[0][0] - firstSort[3][0])*(secondSort[0][1]-secondSort[3][1]);
}